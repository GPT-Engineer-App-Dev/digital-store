import { Box, SimpleGrid, Image, Text, VStack, Heading } from "@chakra-ui/react";

const sampleProducts = [
  {
    id: 1,
    name: "Smartphone",
    description: "Latest model with advanced features",
    image: "https://via.placeholder.com/150",
    price: "$699",
  },
  {
    id: 2,
    name: "Laptop",
    description: "High performance laptop for professionals",
    image: "https://via.placeholder.com/150",
    price: "$999",
  },
  {
    id: 3,
    name: "Smartwatch",
    description: "Stay connected on the go",
    image: "https://via.placeholder.com/150",
    price: "$199",
  },
];

const Products = () => {
  return (
    <Box p={4}>
      <Heading as="h1" mb={6} textAlign="center">Our Products</Heading>
      <SimpleGrid columns={[1, 2, 3]} spacing={10}>
        {sampleProducts.map((product) => (
          <Box key={product.id} borderWidth="1px" borderRadius="lg" overflow="hidden" p={4}>
            <Image src={product.image} alt={product.name} />
            <VStack align="start" mt={4}>
              <Heading as="h2" size="md">{product.name}</Heading>
              <Text>{product.description}</Text>
              <Text fontWeight="bold">{product.price}</Text>
            </VStack>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Products;