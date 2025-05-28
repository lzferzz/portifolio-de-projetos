import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ExternalLink } from "lucide-react"

export default function Portfolio() {
  const skills = ["HTML", "CSS", "JavaScript", "Scratch"]

  const projects = [
    {
      title: "Minha Biblioteca: Uma Webpage Personalizada",
      description:
        "Este projeto é uma página web que apresenta uma lista dos meus livros favoritos, incluindo informações sobre os autores, datas de publicação e links para compra na Amazon. A página é estilizada com CSS para uma visualização agradável e usa fontes externas do Google Fonts.",
      bgColor: "bg-pink-200",
      textColor: "text-pink-900",
    },
    {
      title: "Decidindo o Futuro: Uma Jornada Interativa sobre a Inteligência Artificial",
      description:
        "Este projeto é um jogo interativo baseado em navegador que explora o impacto e as implicações da Inteligência Artificial (IA) na sociedade, permitindo que as pessoas jogadoras façam escolhas que influenciam o desenvolver de uma narrativa sobre o futuro da IA.",
      bgColor: "bg-slate-900",
      textColor: "text-white",
    },
    {
      title: "Explorando o Universo: Uma Aventura Interativa em Astronomia com Scratch",
      description:
        "Este projeto Scratch cria uma experiência interativa educativa sobre astronomia, permitindo aos usuários explorar informações sobre constelações, eclipses, e a forma da Terra através de cenários dinâmicos e diálogos informativos.",
      bgColor: "bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900",
      textColor: "text-white",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Avatar */}
          <div className="mb-6">
            <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-pink-100 flex items-center justify-center">
              <div className="w-24 h-24 rounded-full bg-pink-300 flex items-center justify-center">
                <div className="text-4xl">👩🏽‍💻</div>
              </div>
            </div>
            <p className="text-purple-600 font-medium text-lg">eu sou luiz</p>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl md:text-5xl font-bold text-slate-700 mb-6">Eu ensino Programação</h1>

          {/* Description */}
          <p className="text-slate-600 text-lg leading-relaxed mb-8 max-w-3xl mx-auto">
            Sou Engenheira de Computação e Pedagoga. Ensino pensamento computacional para estudantes do Ensino
            Fundamental e Médio. Ensino sobre pensamento computacional usando HTML, CSS e JavaScript. Veja os projetos
            que já desenvolvi!
          </p>

          {/* Skills Section */}
          <div className="mb-12">
            <h2 className="text-slate-600 text-lg mb-4">Minhas habilidades</h2>
            <div className="flex flex-wrap justify-center gap-3">
              {skills.map((skill) => (
                <Badge
                  key={skill}
                  variant="secondary"
                  className="bg-slate-600 text-white hover:bg-slate-700 px-4 py-2 text-sm"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="container mx-auto px-4 pb-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-700 mb-12 text-center">Meus projetos</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className={`h-32 ${project.bgColor} flex items-center justify-center relative`}>
                  {index === 0 && (
                    <div className="text-center">
                      <div className="text-white font-bold text-lg mb-2">Meus Livros</div>
                      <div className="flex gap-2 justify-center">
                        <div className="w-8 h-10 bg-green-600 rounded"></div>
                        <div className="w-8 h-10 bg-orange-500 rounded"></div>
                        <div className="w-8 h-10 bg-blue-600 rounded"></div>
                      </div>
                    </div>
                  )}
                  {index === 1 && (
                    <div className="text-center">
                      <div className="text-white font-bold text-xl mb-2">Você decide o futuro da IA</div>
                      <div className="text-white text-sm opacity-90">
                        Navegue pelas escolhas que moldam nossa sociedade
                      </div>
                    </div>
                  )}
                  {index === 2 && (
                    <div className="text-center relative">
                      <div className="w-16 h-16 bg-green-500 rounded-full mx-auto mb-2 flex items-center justify-center">
                        <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                          <div className="w-8 h-8 bg-green-400 rounded-full"></div>
                        </div>
                      </div>
                      <div className="text-white text-xs">EXPLORAÇÃO</div>
                    </div>
                  )}
                </div>

                <CardHeader>
                  <CardTitle className="text-slate-700 text-lg leading-tight">{project.title}</CardTitle>
                </CardHeader>

                <CardContent>
                  <CardDescription className="text-slate-600 text-sm leading-relaxed mb-4">
                    {project.description}
                  </CardDescription>

                  <Button variant="outline" className="w-full border-purple-600 text-purple-600 hover:bg-purple-50">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Veja o projeto
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
