import {
    Box,
    Button,
    Modal as ChakraModal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Text,
    Image,
    Flex,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { ArrowBackIcon, CheckIcon } from '@chakra-ui/icons';

interface CustomModalProps {
    isOpen: boolean;
    onClose: () => void;
    message: string;
    title: string;
    onClick: () => void;
}

export default function CustomModal({ isOpen, onClose, message, title, onClick }: CustomModalProps) {
    const router = useRouter();
    const handleConfirm = () => {
        onClick();
    };

    return (
        <ChakraModal isOpen={isOpen} onClose={onClose} isCentered>
            <ModalOverlay />
            <ModalContent
                bg="#ADF6DB"
                maxWidth="800px"
                boxShadow="0 0 10px rgba(0, 0, 0, 0.1)"
            >
                <Flex
                    justify="space-between"
                    p="1"
                >
                    <Image
                        src="images/logo.png"
                        width="80px"
                        height="80px"
                        alt="Logo"
                    />
                </Flex>
                <ModalHeader
                    fontSize="50px"
                    fontWeight="bold"
                    textAlign="center"
                    color="darkslategray"
                    flex="1"
                >
                    {title.toUpperCase()}
                </ModalHeader>

                <ModalBody textAlign="center" p="10" bg="white" borderRadius="8px" mx="20" mt="15" minHeight="200px">
                    <Text fontSize="xl" color="darkslategray" fontWeight="500">
                        {message}
                    </Text>
                </ModalBody>

                <ModalFooter justifyContent="right" p="4">
                    <Button
                        onClick={onClose}
                        bg="tomato"
                        color="white"
                        _hover={{ bg: "red.600" }}
                        leftIcon={<ArrowBackIcon />}
                        mr="4"
                    >
                        Voltar
                    </Button>
                    <Button
                        onClick={handleConfirm}
                        bg="green.400"
                        color="white"
                        _hover={{ bg: "green.600" }}
                        leftIcon={<CheckIcon />}
                    >
                        Confirmar
                    </Button>
                </ModalFooter>
            </ModalContent>
        </ChakraModal>
    );
}
