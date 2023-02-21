import { Header } from "../../../common/styles/Header";
import { Paragraph } from "../../../common/styles/Paragraph";
import Logo from "../../../common/Logo";
import { SectionIntro, Container, Wrapper, ImageWrapper, Image } from "./styled.js";
import plant1 from "./smallPlant1.jpg";
import plant2 from "./smallPlant2.jpg";
import plant3 from "./smallPlant3.jpg";

const Introduction = () => {
    return (
        <SectionIntro>
            <Header>Indoor Plant Cultivation at Home</Header>
            <Container>
                <Wrapper>
                    <Paragraph>
                        Having plants in the home brings many benefits for our health and well-being.
                        They serve as natural air filters, helping to remove harmful substances such as formaldehyde, benzene, and trichloroethylene.
                        At night, they release carbon dioxide, which helps to maintain good air quality and improve sleep quality.
                    </Paragraph>
                    <Paragraph>
                        Studies show that the presence of plants in the workplace can improve concentration and productivity.
                        Plants are associated with better well-being and fewer symptoms of depression.
                        Additionally, plants naturally regulate temperature and humidity,
                        which can help to save energy and lower heating and air conditioning bills.
                    </Paragraph>
                    <Paragraph>
                        Cultivating indoor plants is a hobby that is gaining popularity among those who want to increase
                        their green experience and improve the air quality in their homes.
                        Not only do indoor plants look beautiful,
                        but they also help in filtering the air and improving its quality.
                    </Paragraph>
                    <Logo />
                </Wrapper>
                <ImageWrapper>
                    <Image photoOne src={plant1} alt="plant photo1" />
                    <Image photoThree src={plant3} alt="plant photo3" />
                    <Image photoTwo src={plant2} alt="plant photo2" />
                </ImageWrapper>
            </Container>
        </SectionIntro>
    )
}

export default Introduction;