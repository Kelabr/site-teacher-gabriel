import Image from "next/image"
import { Instagram } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section - Ajustada para proporções e espaçamento mobile */}
      <section className="py-8 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-center md:space-between">
            <div className="w-full md:w-1/2 flex flex-col justify-center mb-4 md:mb-0 md:pr-4 md:h-[600px] md:justify-center">
              <h1 className="text-5xl md:text-6xl font-bold text-darkPurple mb-4">
                TEACHER
                <br />
                GABRIEL
              </h1>
              <h2 className="text-xl md:text-2xl font-medium mb-4">
                Aulas personalizadas
                <br />
                com foco em conversação
              </h2>
              <p className="text-gray-700 mb-6">
                Aqui você aprende inglês de
                <br />
                maneira dinâmica e próxima.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#about"
                  className="bg-darkPurple hover:bg-opacity-80 text-white font-bold py-3 px-6 rounded text-center"
                >
                  CONHEÇA MAIS
                </a>
                <a
                  href="https://www.instagram.com/teacher.gabrielribant?igsh=MWVmNmo2bDhhNnEwMw=="
                  className="bg-brightRed hover:bg-burgundy text-white py-3 px-6 rounded flex items-center justify-center gap-2"
                >
                  <Instagram size={20} />
                  INSTAGRAM
                </a>
              </div>
            </div>
            <div className="w-full md:w-1/2 flex items-center justify-center md:pl-4">
              <div className="relative w-full h-[400px] md:h-[600px] rounded-2xl overflow-hidden">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/EU%20PRINCIPAL.png-Xc7CTBR4gjU9LUVpyo7FxkyKBYm9Lr.jpeg"
                  alt="Teacher Gabriel"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-darkPurple mb-12">O que meus alunos dizem</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200 md:transform md:transition-all md:hover:-translate-y-2">
              <div className="h-64 relative">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WELTON.PNG-N1cqFu2tWoYSGEE2LoJEmTlfw5S6p2.png"
                  alt="Welton"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">
                  "O teacher Gabriel superou as minhas expectativas. Já havia conhecido outras escolas e professores
                  particulares, mas o jeito dele de ensinar de uma maneira descontraída e leve me ajudou muito a
                  conseguir evoluir o meu nível de inglês. Super recomendo a todos que quiserem aprender inglês de
                  verdade."
                </p>
                <h3 className="font-bold text-brightRed">Welton</h3>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200 md:transform md:transition-all md:hover:-translate-y-2">
              <div className="h-64 relative">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/VAL%C3%89RIA.PNG-2OK55TRwjeEOdG9UmxgnSj0UG48Uv2.png"
                  alt="Valéria"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">
                  "Ótimo professor!!! Sempre disponível para resolver as dúvidas e leciona de uma forma divertida. Me
                  ajudou a desenvolver muito meu inglês."
                </p>
                <h3 className="font-bold text-brightRed">Valéria</h3>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200 md:transform md:transition-all md:hover:-translate-y-2">
              <div className="h-64 relative">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/RODRIGO.PNG-b9HShjcieMoMFP6kCm4anYGvQP55Q5.png"
                  alt="Rodrigo"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">
                  "Gostaria de parabenizar o professor Ribant pelas aulas de inglês. A metodologia utilizada é muito
                  eficiente, dinâmica e envolvente, o que facilita bastante o aprendizado e mantém o interesse durante
                  toda a aula. Sinto que estou evoluindo rapidamente graças à abordagem clara e prática adotada, que
                  consegue equilibrar teoria e prática de forma excelente. Recomendo fortemente as aulas para quem
                  deseja realmente aprimorar o inglês com qualidade."
                </p>
                <h3 className="font-bold text-brightRed">Rodrigo</h3>
              </div>
            </div>

            {/* Testimonial 4 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200 md:transform md:transition-all md:hover:-translate-y-2">
              <div className="h-64 relative">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/CARLOS.PNG-pzN6LHVw8d8Iwp75CXhEfnAT5wm2mO.png"
                  alt="Carlos"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">
                  "Um ótimo professor, pontual, que não está lá só pelo dinheiro, e sim para que você aprenda, não é só
                  seu professor, também é seu amigo que está pra te ajudar no que for possível de várias formas,
                  atividades diversas em prol da melhoria do seu conhecimento. Eu super recomendo, e já tenho aula com
                  ele a mais de 1 ano, e meu inglês evoluiu bastante com passar do tempo. E só tenho a agradecer."
                </p>
                <h3 className="font-bold text-brightRed">Carlos</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="bg-darkPurple text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-12">Produtos e Serviços</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white bg-opacity-10 rounded-lg p-8 hover:shadow-lg transition-shadow">
              <div className="flex justify-center mb-4">
                <div className="bg-white p-4 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-10 w-10 text-darkPurple"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-2">Turmas</h3>
              <p>
                Aulas em pequenos grupos
                <br />
                (Max 5 pessoas)
              </p>
            </div>
            <div className="bg-brightRed rounded-lg p-8 hover:shadow-lg transition-shadow">
              <div className="flex justify-center mb-4">
                <div className="bg-white p-4 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-10 w-10 text-brightRed"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Aulas VIP</h3>
              <p className="text-white">
                Aulas particulares e<br />
                personalizadas.
              </p>
            </div>
            <div className="bg-white bg-opacity-10 rounded-lg p-8 hover:shadow-lg transition-shadow">
              <div className="flex justify-center mb-4">
                <div className="bg-white p-4 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-10 w-10 text-darkPurple"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                    />
                  </svg>
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-2">E-book</h3>
              <p>
                E-book com exemplos,
                <br />
                exercícios práticos e áudios
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-darkPurple mb-4">
              Quanto custa investir no seu futuro?
            </h2>
            <p className="text-xl text-gray-600 font-medium">Aulas individuais</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Plano Essencial */}
            <div className="bg-white rounded-lg shadow-lg p-8 border border-gray-200 hover:shadow-xl transition-shadow">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-darkPurple mb-2">Plano Essencial</h3>
                <p className="text-gray-600 mb-6">2 aulas por semana</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-brightRed">R$ 600</span>
                  <span className="text-gray-600 ml-2">por mês</span>
                </div>
              </div>
            </div>

            {/* Plano Intenso - Destacado */}
            <div className="bg-brightRed rounded-lg shadow-lg p-8 border-2 border-brightRed hover:shadow-xl transition-shadow relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-darkPurple text-white px-4 py-2 rounded-full text-sm font-bold">MAIS POPULAR</span>
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-bold text-white mb-2">Plano Intenso</h3>
                <p className="text-white opacity-90 mb-6">3 aulas por semana</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-white">R$ 900</span>
                  <span className="text-white opacity-90 ml-2">por mês</span>
                </div>
              </div>
            </div>

            {/* Plano Imersivo */}
            <div className="bg-white rounded-lg shadow-lg p-8 border border-gray-200 hover:shadow-xl transition-shadow">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-darkPurple mb-2">Plano Imersivo</h3>
                <p className="text-gray-600 mb-6">4 aulas por semana</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-brightRed">R$ 1200</span>
                  <span className="text-gray-600 ml-2">por mês</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section - Com foto ao lado */}
      <section id="about" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-darkPurple mb-12">Sobre Mim</h2>
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
              {/* Foto do Professor */}
              <div className="w-full md:w-1/2 flex justify-center">
                <div className="relative w-full max-w-md h-[500px] md:h-[600px] rounded-2xl overflow-hidden shadow-lg">
                  <Image
                    src="/images/gabriel-about.png"
                    alt="Gabriel Ribant - Professor de Inglês"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Texto Sobre Mim */}
              <div className="w-full md:w-1/2">
                <div className="bg-gray-50 rounded-lg shadow-lg p-8 md:p-10">
                  <div className="prose prose-lg max-w-none">
                    <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                      Olá! Sou o <strong className="text-darkPurple">Gabriel Ribant</strong>, professor particular de
                      inglês especializado em ajudar brasileiros a se comunicarem com clareza, confiança e naturalidade.
                      Seja no trabalho, em viagens ou na vida real.
                    </p>
                    <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                      Minhas aulas são <strong className="text-brightRed">100% personalizadas</strong> e focadas no que
                      realmente importa pra você: falar com fluência, entender nativos e se expressar com autonomia. Sem
                      enrolação, sem decoreba, sem fórmulas mágicas. Só aprendizado de verdade, no seu ritmo.
                    </p>
                    <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                      Já ajudei <strong className="text-darkPurple">milhares de alunos</strong> no Brasil e no exterior
                      a saírem do básico, destravarem na conversação e atingirem metas profissionais, acadêmicas e
                      pessoais com o inglês.
                    </p>
                    <p className="text-gray-700 text-lg leading-relaxed">
                      Se você está pronto pra dar esse passo, vai ser um prazer te acompanhar nessa jornada.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-darkPurple text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>© {new Date().getFullYear()} Teacher Gabriel. Todos os direitos reservados.</p>
          <div className="mt-4 flex justify-center">
            <a href="https://www.instagram.com/teacher.gabrielribant?igsh=MWVmNmo2bDhhNnEwMw==" className="text-white hover:text-brightRed mx-2">
              <Instagram size={24} />
              <span className="sr-only">Instagram</span>
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
