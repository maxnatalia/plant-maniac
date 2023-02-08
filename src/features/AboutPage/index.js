import HeroWrapper from "../../common/HeroWrapper";
import { Paragraph } from "../../common/styles/Paragraph";
import { Header } from "../../common/styles/Header";
import { Section } from "../../common/styles/Section";

const AboutPage = () => {
    return (
        <>
            <HeroWrapper title="about" />
            <Section>
                <Header>our story</Header>
                <Paragraph>
                    The story of the Plant Maniac company begins in 2005, when the founder, a nature and plant enthusiast,
                    decided to start selling potted plants at a small stall at a local market.
                    His passion and commitment to the potted plant industry attracted many customers,
                    and he quickly gained popularity among plant lovers.
                </Paragraph>
                <Paragraph>
                    In 2010, recognizing the potential of the e-commerce market, the founder began selling potted plants online. With his knowledge and experience,
                    the company quickly became one of the leading players in the online potted plant sales industry. Within a few years,
                    the company expanded its operations to several countries in Europe and began offering a wide range of plants,
                    including unique and hard-to-find species.
                </Paragraph>
                <Paragraph>
                    In 2015, the company opened its first brick-and-mortar store to allow customers to make direct purchases and receive advice on plant care.
                    The store became a popular destination for plant lovers and quickly became a reference point in the industry.
                </Paragraph>
                <Paragraph>
                    Today, the company is one of the respected and recognized suppliers of potted plants online and in brick-and-mortar stores,
                    with a network of stores in several countries and hundreds of thousands of satisfied customers.
                    The founder and his team continue to work with passion and commitment to deliver the best plants and care advice,
                    as well as to expand their offerings and services.
                </Paragraph>
            </Section>
        </>
    )
}

export default AboutPage;