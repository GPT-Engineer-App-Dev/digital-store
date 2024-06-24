import { Box, SimpleGrid, Image, Text, VStack, Heading, Checkbox, CheckboxGroup, Stack, RangeSlider, RangeSliderTrack, RangeSliderFilledTrack, RangeSliderThumb } from "@chakra-ui/react";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

const sampleProducts = [
  {
    id: 1,
    name: "Smartphone",
    description: "Latest model with advanced features",
    image: "https://via.placeholder.com/150",
    price: 699,
    category: "Electronics",
  },
  {
    id: 2,
    name: "Laptop",
    description: "High performance laptop for professionals",
    image: "https://via.placeholder.com/150",
    price: 999,
    category: "Electronics",
  },
  {
    id: 3,
    name: "Smartwatch",
    description: "Stay connected on the go",
    image: "https://via.placeholder.com/150",
    price: 199,
    category: "Wearables",
  },
];

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

const Products = () => {
  const [filteredProducts, setFilteredProducts] = useState(sampleProducts);
  const [categories, setCategories] = useState([]);
  const [priceRange, setPriceRange] = useState([0, 1000]);

  useEffect(() => {
    const query = useQuery().get("search") || "";
    filterProducts(query, categories, priceRange);
  }, [useLocation().search, categories, priceRange]);

  const filterProducts = (query, categories, priceRange) => {
    setFilteredProducts(
      sampleProducts.filter((product) => {
        const matchesQuery = product.name.toLowerCase().includes(query.toLowerCase());
        const matchesCategory = categories.length === 0 || categories.includes(product.category);
        const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
        return matchesQuery && matchesCategory && matchesPrice;
      })
    );
  };

  const handleCategoryChange = (selectedCategories) => {
    setCategories(selectedCategories);
  };

  const handlePriceChange = (value) => {
    setPriceRange(value);
  };

  return (
    <Box p={4}>
      <Heading as="h1" mb={6} textAlign="center">Our Products</Heading>
      <Box mb={6}>
        <Heading as="h2" size="md" mb={4}>Filter By</Heading>
        <CheckboxGroup colorScheme="teal" onChange={handleCategoryChange}>
          <Stack spacing={2} direction="row">
            <Checkbox value="Electronics">Electronics</Checkbox>
            <Checkbox value="Wearables">Wearables</Checkbox>
          </Stack>
        </CheckboxGroup>
        <Heading as="h3" size="sm" mt={4}>Price Range</Heading>
        <RangeSlider defaultValue={[0, 1000]} min={0} max={1000} step={50} onChangeEnd={handlePriceChange}>
          <RangeSliderTrack>
            <RangeSliderFilledTrack />
          </RangeSliderTrack>
          <RangeSliderThumb index={0} />
          <RangeSliderThumb index={1} />
        </RangeSlider>
      </Box>
      <SimpleGrid columns={[1, 2, 3]} spacing={10}>
        {filteredProducts.map((product) => (
          <Box key={product.id} borderWidth="1px" borderRadius="lg" overflow="hidden" p={4}>
            <Image src={product.image} alt={product.name} />
            <VStack align="start" mt={4}>
              <Heading as="h2" size="md">{product.name}</Heading>
              <Text>{product.description}</Text>
              <Text fontWeight="bold">${product.price}</Text>
            </VStack>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Products;