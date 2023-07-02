import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Box, Text } from '@chakra-ui/react'
import Layout from '../src/modules/common/Layout'

export default function Home() {
  return (
    <Layout>
      <Box textAlign='center' pt='50px'>
        <Text fontSize='50px' fontWeight='400' textTransform={'uppercase'}>Регистрация</Text>
      </Box>
    </Layout>
  )
}
