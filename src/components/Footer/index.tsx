"use client";
import { 
  FooterContainer, 
  FooterContent, 
  FooterSection, 
  FooterTitle, 
  FooterText,
  SocialLinks,
  SocialLink,
  FooterBottom
} from "./styles";
import { FiGithub, FiLinkedin, FiMail, FiHeart } from 'react-icons/fi';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <FooterContainer> 
            <FooterContent>
                <FooterSection>
                    <FooterTitle>CineHub</FooterTitle>
                    <FooterText>
                        Descubra, explore e organize sua coleção de filmes favoritos. 
                        Uma experiência cinematográfica única ao seu alcance.
                    </FooterText>
                </FooterSection>

                <FooterSection>
                    <FooterTitle>Recursos</FooterTitle>
                    <FooterText>• Busca avançada de filmes</FooterText>
                    <FooterText>• Filtros por gênero</FooterText>
                    <FooterText>• Avaliações e classificações</FooterText>
                    <FooterText>• Interface responsiva</FooterText>
                </FooterSection>

                <FooterSection>
                    <FooterTitle>Contato</FooterTitle>
                    <SocialLinks>
                        <SocialLink href="https://github.com/BrunoEstevan" target="_blank" rel="noopener noreferrer">
                            <FiGithub size={20} />
                            <span>GitHub</span>
                        </SocialLink>
                        <SocialLink href="https://linkedin.com/in/brunoestevan" target="_blank" rel="noopener noreferrer">
                            <FiLinkedin size={20} />
                            <span>LinkedIn</span>
                        </SocialLink>
                        <SocialLink href="mailto:brunoestevan@email.com">
                            <FiMail size={20} />
                            <span>Email</span>
                        </SocialLink>
                    </SocialLinks>
                </FooterSection>
            </FooterContent>

            <FooterBottom>
                <FooterText>
                    &copy; {currentYear} CineHub. Desenvolvido com <FiHeart color="#e74c3c" /> por Bruno Estevan
                </FooterText>
                <FooterText>
                    Dados fornecidos por The Movie Database (TMDb)
                </FooterText>
            </FooterBottom>
        </FooterContainer>
    );           
}