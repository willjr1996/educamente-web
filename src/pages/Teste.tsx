import {
    Box,
    Button,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalCloseButton,
    ModalFooter,
    useDisclosure,
    Text,
    Image
} from "@chakra-ui/react";

export default function ModalExample() {
    // useDisclosure fornece funções para abrir e fechar o modal
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <Box textAlign="center" py={10}>
            {/* Botão que abre o modal */}
            <Button onClick={onOpen} colorScheme="teal">
                Open Modal
            </Button>

            {/* Modal */}
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>
                        <Image src="/images/logo.png"/>
                        Confirmação

                    </ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Text>This is an example of a Chakra UI modal.</Text>
                    </ModalBody>

                    <ModalFooter>
                        {/* Botões no rodapé do modal */}
                        <Button variant="ghost" mr={3} onClick={onClose}>
                            Close
                        </Button>
                        <Button colorScheme="teal" onClick={onClose}>
                            Save
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </Box>
    );
}
