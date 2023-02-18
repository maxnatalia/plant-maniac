import styled from "styled-components";
import { GiPlantSeed } from "react-icons/gi";

export const Container = styled.div`
    margin: 40px auto;
    max-width: 1200px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-row-gap: 30px;
    grid-column-gap: 20px;
`;

export const ItemContainer = styled.div`
    margin: 10px;
    display: grid;
    grid-template-columns: min-content 1fr;
    grid-row-gap: 20px;
    grid-column-gap: 10px;
`;

export const Icon = styled(GiPlantSeed)`
    width: 50px;
    height: 50px;
    transform: translateY(-20px);

    grid-row: 1 / span 2;
`;