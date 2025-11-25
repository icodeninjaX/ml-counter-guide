'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function VideoUploader({ onFileSelect, maxSize = 100, acceptedFormats = ['video/mp4', 'video/webm', 'video/quicktime'] }) {
    const [dragActive, setDragActive] = useState(false);
    const [selectedFile, setSelectedFile] = useState(null);
    const [error, setError] = useState('');
    const [preview, setPreview] = useState(null);

    const formatFileSize = (bytes) => {
        if (bytes === 0) return '0 Bytes';
        const k = 1024;
        const sizes = ['Bytes', 'KB', 'MB', 'GB'];
        const i = Math.floor(Math.log(bytes) / Math.log(k));
        return Math.round((bytes / Math.pow(k, i)) * 100) / 100 + ' ' + sizes[i];
    };

    const validateFile = (file) => {
        setError('');

        // Check file type
        if (!acceptedFormats.includes(file.type)) {
            setError(`Invalid file format. Please upload ${acceptedFormats.map(f => f.split('/')[1].toUpperCase()).join(', ')} files only.`);
            return false;
        }

        // Check file size (convert MB to bytes)
        const maxSizeBytes = maxSize * 1024 * 1024;
        if (file.size > maxSizeBytes) {
            setError(`File size exceeds ${maxSize}MB limit. Please upload a smaller file.`);
            return false;
        }

        return true;
    };

    const handleDrag = (e) => {
        e.preventDefault();
        e.stopPropagation();
        if (e.type === "dragenter" || e.type === "dragover") {
            setDragActive(true);
        } else if (e.type === "dragleave") {
            setDragActive(false);
        }
    };

    const handleDrop = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setDragActive(false);

        const files = e.dataTransfer.files;
        if (files && files[0]) {
            handleFile(files[0]);
        }
    };

    const handleChange = (e) => {
        e.preventDefault();
        const files = e.target.files;
        if (files && files[0]) {
            handleFile(files[0]);
        }
    };

    const handleFile = (file) => {
        if (validateFile(file)) {
            setSelectedFile(file);

            // Create preview URL for video
            const url = URL.createObjectURL(file);
            setPreview(url);

            // Call parent callback
            if (onFileSelect) {
                onFileSelect(file);
            }
        }
    };

    const clearFile = () => {
        setSelectedFile(null);
        setPreview(null);
        setError('');
        if (preview) {
            URL.revokeObjectURL(preview);
        }
        if (onFileSelect) {
            onFileSelect(null);
        }
    };

    return (
        <div className="w-full">
            <AnimatePresence mode="wait">
                {!selectedFile ? (
                    <motion.div
                        key="uploader"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="relative"
                    >
                        <form
                            onDragEnter={handleDrag}
                            onDragLeave={handleDrag}
                            onDragOver={handleDrag}
                            onDrop={handleDrop}
                            className="relative"
                        >
                            <input
                                type="file"
                                id="video-upload"
                                accept={acceptedFormats.join(',')}
                                onChange={handleChange}
                                className="hidden"
                            />

                            <label
                                htmlFor="video-upload"
                                className={`flex flex-col items-center justify-center w-full h-64 border-2 border-dashed rounded-lg cursor-pointer transition-all duration-300
                  ${dragActive
                                        ? 'border-blue-500 bg-blue-500/10 scale-105'
                                        : 'border-gray-600 hover:border-blue-400 bg-gray-800/50 hover:bg-gray-800/70'
                                    }`}
                            >
                                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                    <svg
                                        className={`w-12 h-12 mb-4 transition-colors ${dragActive ? 'text-blue-400' : 'text-gray-400'}`}
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                                        />
                                    </svg>
                                    <p className="mb-2 text-sm text-gray-300">
                                        <span className="font-semibold">Click to upload</span> or drag and drop
                                    </p>
                                    <p className="text-xs text-gray-400">
                                        MP4, WebM, or MOV (Max {maxSize}MB)
                                    </p>
                                </div>
                            </label>
                        </form>

                        {error && (
                            <motion.div
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="mt-4 p-4 bg-red-900/30 border border-red-500 rounded-lg"
                            >
                                <p className="text-sm text-red-300 flex items-center">
                                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                                    </svg>
                                    {error}
                                </p>
                            </motion.div>
                        )}
                    </motion.div>
                ) : (
                    <motion.div
                        key="preview"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="bg-gray-800/50 border border-gray-700 rounded-lg p-6"
                    >
                        <div className="flex items-start justify-between mb-4">
                            <div className="flex items-center space-x-4 flex-1">
                                <div className="flex-shrink-0">
                                    <svg className="w-12 h-12 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" />
                                    </svg>
                                </div>
                                <div className="flex-1 min-w-0">
                                    <p className="text-sm font-medium text-gray-200 truncate">
                                        {selectedFile.name}
                                    </p>
                                    <p className="text-sm text-gray-400">
                                        {formatFileSize(selectedFile.size)}
                                    </p>
                                </div>
                            </div>
                            <button
                                onClick={clearFile}
                                className="flex-shrink-0 ml-4 text-gray-400 hover:text-red-400 transition-colors"
                                aria-label="Remove file"
                            >
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>

                        {preview && (
                            <div className="mt-4 rounded-lg overflow-hidden bg-black">
                                <video
                                    src={preview}
                                    controls
                                    className="w-full max-h-96"
                                    preload="metadata"
                                >
                                    Your browser does not support the video tag.
                                </video>
                            </div>
                        )}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
