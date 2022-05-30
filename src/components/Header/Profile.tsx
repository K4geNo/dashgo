import { Flex, Box, Avatar, Text } from '@chakra-ui/react'

export function Profile() {
    return (
        <Flex align={'center'}>
            <Box mr={'4'} textAlign="right">
                <Text>KageNo</Text>
                <Text color={'gray.300'} fontSize="small">
                    micaraujo71@gmail.com
                </Text>
            </Box>

            <Avatar
                size={'md'}
                name="KageNo"
                src="https://github.com/K4geNo.png"
            />
        </Flex>
    )
}
