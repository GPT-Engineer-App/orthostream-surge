import { Box, Container, Flex, Heading, Text, VStack, Image, Button } from "@chakra-ui/react";
import { FaClock } from "react-icons/fa";
import { useEffect, useState } from "react";

const Index = () => {
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 30);

    const interval = setInterval(() => {
      const now = new Date();
      const difference = targetDate - now;

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setCountdown({ days, hours, minutes, seconds });

      if (difference < 0) {
        clearInterval(interval);
        setCountdown({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Container maxW="container.xl" p={0} centerContent>
      <Box bg="gray.900" color="white" minHeight="100vh" width="full">
        <Flex direction="column" align="center" justify="center" height="full">
          <VStack spacing={8} py={10}>
            <Image src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxvcnRob3BlZGljJTIwc2lsaG91ZXR0ZXxlbnwwfHx8fDE3MTU1MTEzNDV8MA&ixlib=rb-4.0.3&q=80&w=1080" boxSize="150px" alt="OrthoStream Logo" />
            <Heading as="h1" size="xl" fontWeight="bold">
              Welcome to the future of orthopedic scheduling!
            </Heading>
            <Text fontSize="lg">OrthoStream is revolutionizing the way orthopedic departments schedule and manage their operations.</Text>
          </VStack>
          <VStack spacing={4} p={8} bg="gray.800" boxShadow="md" rounded="lg">
            <Flex align="center">
              <FaClock size="2em" />
              <Heading as="h2" size="lg" ml={2}>
                Demo Launching In:
              </Heading>
            </Flex>
            <Text fontSize="3xl" fontWeight="bold">{`${countdown.days}d ${countdown.hours}h ${countdown.minutes}m ${countdown.seconds}s`}</Text>
          </VStack>
          <VStack spacing={6} mt={10}>
            <Button colorScheme="blue" size="lg">
              Learn More
            </Button>
            <Button colorScheme="teal" size="lg">
              Contact Us
            </Button>
          </VStack>
          <Box as="footer" py={5} mt={10} width="full" textAlign="center">
            <Text fontSize="sm">© 2023 OrthoStream. All rights reserved.</Text>
          </Box>
        </Flex>
      </Box>
    </Container>
  );
};

export default Index;
