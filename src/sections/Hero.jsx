import Button from '@/components/Button';
import { ArrowRight, ChevronDown } from 'lucide-react';
import AnimatedBorderButton from '../components/AnimatedBorderButton';
import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa';

const Hero = () => {

  const skills = [
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "GraphQL",
    "PostgreSQL",
    "MongoDB",
    "Redis",
    "Docker",
    "AWS",
    "Vercel",
    "Tailwind CSS",
    "Prisma",
    "Jest",
    "Cypress",
    "Figma",
    "Git",
    "GitHub Actions",
  ];
  
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img src="/hero.jpg" alt="hero" className="w-full h-full object-cover opacity-40"/>
        <div className="absolute inset-0 bg-gradient-to-b via-background/80 from-background/20 to-background"/>
      </div>

      {/* Green dots */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div className="absolute w-1.5 h-1.5 rounded-full opacity-60"
          style={{
            backgroundColor: "#3870D0",
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animation: `slow-drift ${15 + Math.random() * 20}s ease-in-out infinite`,
            animationDelay: `${Math.random() * 5}s `
          }}/>
        ))}
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 pt-52 pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - text content */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary">
                 <span className="w-2 h-2 bg-primary rounded-full animate-pulse"/>
                    Software Engineer + React Specialist
              </span>
            </div>
            {/* Headline */}
            <div className="space-y-4">

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight animate-fade-in animation-delay-100">
                  Crafting <span className="text-primary glow-text">digital</span>
                  <br />
                  experiences with
                  <br />
                  <span className="font-serif italic font-normal text-white">
                    precision.
                  </span>
                </h1>

                <p className="text-muted-foreground max-w-lg animate-fade-in animation-delay-200">
                Hi, I'm Pedro Machado — a software engineer specializing in
                React, Next.js, and TypeScript. I build scalable, performant web
                applications that users love.
              </p>

            </div>

            {/* CTA */}
            <div className='flex flex-wrap gap-4 animate-fade-in animation-delay-300'>
              <Button size="lg">Contact Me <ArrowRight className='h-5 w-5'/></Button>
              <AnimatedBorderButton />
            </div>

            {/* Social Links */}
            <div className='flex items-center gap-4 animate-fade-in animation-delay-400'>
              <span className='text-sm text-muted-foreground'>Follow :</span>
              {[{icon: FaGithub, href: "#"},
                {icon: FaLinkedin, href: "#"},
                {icon: FaTwitter, href: "#"}
              ].map((social, idx) => (
                <a key={idx} href={social.href} className='p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300'>
                  {<social.icon className="w-4 h-4" />}
                </a>
              ))}
            </div>
            
          </div>
          {/* Right - profile image */}
          <div className='relative animate-fade-in animation-delay-300'>
            {/* profile */}
            <div className='relative max-w-xl mx-auto' >
              <div className='relative rounded-3xl p-2'>
                <img src='Nadeeshika.png' alt='Nadeeshika Gimhani' className='w-full max-w-[600px] ml-auto bg-gradient-to-t from-[#3870D0] via-30% via-blue-400/35 to-80% rounded-[60px]'/>

                {/* Floating badge */}
                <div className='absolute -bottom-4 -right-4 glass rounded-xl px-4 py-3 animate-float'>
                  <div className='flex items-center gap-3'>
                    <div className='w-3 h-3 bg-green-500 rounded-full animate-pulse'/>
                    <span className='text-sm font-medium'>Available for Work</span>
                  </div>
                </div>
                {/* Stats badge */}
                <div className='absolute -top-4 -left-4 glass rounded-xl px-4 py-3 animate-float animation-delay-500'>
                  <div className='text-2xl font-bold text-primary'>5+</div>
                  <div className='text-xs text-muted-foreground'>Year Experience</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* skills */}
        <div className='mt-20 animate-fade-in animation-delay-600'>
          <p className='text-sm text-muted-foreground mb-6 text-center'>Technologies I work with</p>

          <div className='relative overflow-hidden'>
            <div className='flex animate-marquee'>
              {[...skills, ...skills].map((skill, index)=>(
                <div key={index} className='flex-shrink-0 px-8 py-4'>
                  <span className='text-xl font-semibold text-muted-foreground/50 hover:text-muted-foreground cursor-pointer transition-colors'>{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 
      animate-fade-in animation-delay-800"
      >
        <a
          href="#about"
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
        >
          <span className="text-xs uppercase tracking-wider">Scroll</span>
          <ChevronDown className="w-6 h-6 animate-bounce" />
        </a>
      </div>
    </section>
  )
}

export default Hero
