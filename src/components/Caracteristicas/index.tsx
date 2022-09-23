import { Grid, GridItem } from "@chakra-ui/react";
import Caracteristica from "./Caracteristica";

export default function Caracteristicas() {    
    return (
        <Grid
        templateColumns={["1fr 1fr", "1fr 1fr", "1fr 1fr", "repeat(5,01fr)"]}
        w="100%"
        justifyContent="space-between"
        alignItems="center"
        mt={["10", "32"]}
        mx="auto"
        maxW="1160px"   
        gap={[1,5]}
        >            
            <GridItem>
                <Caracteristica icon="cocktail" text="vida noturna"/>                
            </GridItem>
            <GridItem>
                <Caracteristica icon="surf" text="praia"/>                
            </GridItem>
            <GridItem>
                <Caracteristica icon="building" text="moderno"/>                
            </GridItem>
            <GridItem>
                <Caracteristica icon="museum" text="clássico"/>                
            </GridItem>
            <GridItem colSpan={[2, 2, 2, 1]}>
                <Caracteristica icon="earth" text="e mais..."/>                
            </GridItem>
        </Grid>
    );
}