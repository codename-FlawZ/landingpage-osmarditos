'use client'
import { useState } from "react";
import { FaPaperPlane } from "react-icons/fa";


export default function Contact() {
    const [formData, setFormData] = useState({
        email: '',
        contactType: '',
        firstName: '',
        lastName: '',
        message: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        
        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            })

            if (!res.ok) throw new Error('Erro ao enviar')

            alert('Mensagem enviada com sucesso!')
            setFormData({ email: '', contactType: '', firstName: '', lastName: '', message: ''})
        } catch (err) {
            console.error(err)
            alert('Erro ao enviar sua mensagem. Tente novamente mais tarde.')
        }
    }

    return(
        <section className="container w-full min-h-screen bg-neutral-950">
            <div className="text-center mb-12">
                <h1 className="font-alfa font-bold text-2xl md:text-6xl text-orange-800 uppercase">Entre em contato conosco</h1>
                <p className="uppercase text-sm md:text-base text-neutral-200 mt-4">Veja abaixo como entrar em contato conosco</p>
            </div>
            <div className="max-w-xl mx-auto px-6 py-10 bg-neutral-100 shadow-md rounded-xl mb-5">
                <h2 className="text-2xl tracking-wide font-alfa mb-6 text-left text-orange-800">Converse conosco</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Nome e sobrenome */}
                    <div className="flex gap-4">
                        <div className="flex-1">
                            <label htmlFor="fisrtName" className="block text-sm font-medium text-gray-700">Nome</label>
                            <input type="text" name="firstName" id="firstName" required className="text-neutral-950 mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500" value={formData.firstName} onChange={handleChange} />
                        </div>
                        <div className="flex-1">
                            <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">Sobrenome</label>
                            <input type="text" name="lastName" id="lastName" required className="text-neutral-950 mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500" value={formData.lastName} onChange={handleChange} />
                        </div>
                    </div>

                    {/* E-mail */}
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Seu melhor E-mail</label>
                        <input type="email" name="email" id="email" required className="text-neutral-950 mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500" value={formData.email} onChange={handleChange} />
                    </div>

                    {/* Tipo de contato */}
                    <div>
                        <label htmlFor="contactType" className="block text-sm font-medium text-gray-700">Selecione o tipo de contato</label>
                        <select name="contactType" id="contactType" required className="text-neutral-950 mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500" value={formData.contactType} onChange={handleChange}>
                            <option value="" disabled>Selecione uma opção</option>
                            <option value="show">Contato para Show</option>
                            <option value="fan">Carta de fã</option>
                            <option value="outro">Outro</option>
                        </select>
                    </div>

                    {/* Mensagem */}
                    <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700">Sua mensagem</label>
                        <textarea name="message" id="message" rows={5} required className="text-neutral-950 mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500" value={formData.message} onChange={handleChange} />
                    </div>

                    {/* Botão de envio */}
                    <button className="cursor-pointer w-full bg-orange-800 hover:bg-orange-500 text-neutral-700 hover:text-neutral-200 tracking-wider shadow-md font-bold py-3 px-6 rounded-md transition-colors duration-150 inline-flex items-center justify-center gap-2" type="submit"><FaPaperPlane />Enviar Mensagem</button>
                </form>
            </div>
        </section>
    );
}