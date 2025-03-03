/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { FaLinkedin, FaEnvelope, FaInstagram } from 'react-icons/fa'; // Import ikon

function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        // 1. Buat pesan WhatsApp
        const whatsappMessage = `Nama: ${name}\nEmail: ${email}\nPesan: ${message}`;

        // 2. Encode pesan untuk URL
        const encodedMessage = encodeURIComponent(whatsappMessage);

        // 3. Buat link WhatsApp
        const whatsappLink = `https://wa.me/6285782749611?text=${encodedMessage}`; // Ganti dengan nomor WA Anda

        // 4. Buka link di tab baru
        window.open(whatsappLink, '_blank');

        // Reset form
        setName('');
        setEmail('');
        setMessage('');
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-blue-900 to-blue-400 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl w-full bg-gray-800 p-8 rounded-xl shadow-lg flex">
                {/* Bagian Informasi Kiri */}
                <div className="w-2/4 sm:1/3 pr-8 space-y-6">
                    <h2 className="text-3xl font-bold text-white mb-6">HUBUNGI SAYA</h2>
                    <div className="flex items-center text-gray-300">
                        <FaLinkedin className="mr-3 text-3xl sm:text-xl" />
                        <span className="text-sm">Haikal Survindo Service</span>
                    </div>

                    <div className="flex items-center text-gray-300">
                        <FaInstagram className="mr-3 text-3xl rounded hover:bg-gradient-to-r hover:from-purple-500 hover:via-pink-500 hover:to-yellow-500 hover:text-white" />
                        <span className="text-sm">Haikal Survindo Service</span>
                    </div>
                    <div className="flex items-center text-gray-300">
                        <FaEnvelope className="mr-3 text-3xl " />
                        <span className="text-sm">Haikal Survindo Service</span>
                    </div>
                </div>

                {/* Bagian Formulir Kanan */}
                <div className="w-2/3 space-y-6">
                    <div className="space-y-4">
                        <label htmlFor="name" className="block text-sm font-medium text-gray-300">
                            Nama
                        </label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            className="w-full bg-gray-700 border border-gray-600 rounded-md py-2 px-3 text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="input nama"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className="space-y-4">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                            Email
                        </label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            className="w-full bg-gray-700 border border-gray-600 rounded-md py-2 px-3 text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="input email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="space-y-4">
                        <label htmlFor="message" className="block text-sm font-medium text-gray-300">
                            Pesan
                        </label>
                        <textarea
                            name="message"
                            id="message"
                            rows="4"
                            className="w-full bg-gray-700 border border-gray-600 rounded-md py-2 px-3 text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="input pesan"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                        ></textarea>
                    </div>
                    <div>
                        <button
                            type="submit"
                            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                            onClick={handleSubmit}
                        >
                            Kirim
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;