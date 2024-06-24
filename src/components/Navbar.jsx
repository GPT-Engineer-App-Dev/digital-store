import { Box, Flex, Link, Spacer, Text, Input } from "@chakra-ui/react";
import { useState } from "react";
import { Link as RouterLink } from "react-router-dom";

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <Box bg="teal.500" p={4}>
      <Flex maxW="1200px" mx="auto" align="center">
        <Text fontSize="xl" fontWeight="bold" color="white">
          Electronics Store
        </Text>
        <Input
          placeholder="Search products..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          color="black"
          bg="white"
          mx={2}
        />
        <Spacer />
        <Link as={RouterLink} to="/" color="white" mx={2}>
          Home
        </Link>
        <Link as={RouterLink} to={`/products?search=${searchQuery}`} color="white" mx={2}>
          Products
        </Link>
      </Flex>
    </Box>
  );
};

export default Navbar;