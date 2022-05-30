import { Flex, Box, Avatar, Text } from '@chakra-ui/react'

interface ProfileProps {
    showProfileData: boolean | undefined
}

export function Profile({ showProfileData = true }: ProfileProps) {
    return (
        <Flex align={'center'}>
            {showProfileData && (
                <Box mr={'4'} textAlign="right">
                    <Text>KageNo</Text>
                    <Text color={'gray.300'} fontSize="small">
                        micaraujo71@gmail.com
                    </Text>
                </Box>
            )}

            <Avatar
                size={'md'}
                name="KageNo"
                src="https://github.com/K4geNo.png"
            />
        </Flex>
    )
}
