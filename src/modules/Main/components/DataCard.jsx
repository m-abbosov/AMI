import { Box, Divider, Flex, Icon, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import BoxTitle from './CardTitle'
import DataCardLayout from './DataCardLayout'
import DataRow from './DataRow'
import CardDataLabel from './CardDataLabel'


const DataBox = ({title, data}) => {
  return (
    <DataCardLayout title={title}>
      <Stack pt='16px' direction='column'>
        <Box>
          {data.map((currData, i) => (
            <React.Fragment key={i}>
              <Box>
                <CardDataLabel>
                  {currData.label}:
                </CardDataLabel>
                <DataRow
                  color={currData.color === 'green' ? 'custom.green' : 'black'}
                  icon={currData.icon}
                >
                  {currData.value}
                </DataRow>
              </Box>
              {i !== data.length - 1 && (
                <Box py='20px'>
                  <Divider borderColor='#e9e9e9' />
                </Box>
              )}
            </React.Fragment>
          ))}
        </Box>
      </Stack>
    </DataCardLayout>
  )
}

export default DataBox