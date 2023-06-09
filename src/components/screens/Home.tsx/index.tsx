import { ExerciseCard } from '@components/ExerciseCard'
import { Group } from '@components/Group'
import { HomeHeader } from '@components/HomeHeader'
import { useNavigation } from '@react-navigation/native'
import { AppNavigationRoutesProps } from '@routes/app.routes'
import { FlatList,  HStack,  Heading, Text, VStack } from 'native-base'
import { useState } from 'react'



export function Home() {
  const [groups, setGroups] = useState(['Costa', 'Biceps', 'Tricps', 'Ombro'])
  const [exercises, setExercises] = useState(['Puxada Fronta', 'Remada Curvada', 'Remada unilateral', 'Levantamento terra'])

  const [groupSelected , setGroupSelected ] = useState('Costa')

  const navigation = useNavigation<AppNavigationRoutesProps>()

  function handleOpenExerciseDetails() {
    navigation.navigate('exercise')
  }

  return (
    <VStack flex={1}>
      <HomeHeader />

      <FlatList 
        data={groups}
        keyExtractor={item => item}
        renderItem={({item})=>(
          <Group 
          name={item} 
          isActive={String(groupSelected).toLocaleUpperCase() === String(item).toLocaleUpperCase()}
          onPress={() => setGroupSelected(item)}
          />

        )}
        horizontal
        showsVerticalScrollIndicator={false}
        _contentContainerStyle={{px: 8 }}
        my={10}
        maxH={10}
        minH={10}
      />


      <VStack flex={1} px={8}>
      <HStack justifyContent='space-between' mb={4}>
        <Heading color='gray.200' fontSize="md" fontFamily="heading">
          Exercícios
        </Heading>
        <Text color='gray.200' fontSize="sm">
          {exercises.length}
        </Text>
      </HStack>

      <FlatList 
        data={exercises}
        keyExtractor={item => item}
        renderItem={({item}) => (
          <ExerciseCard
          onPress={handleOpenExerciseDetails} />
        )}
        showsHorizontalScrollIndicator={false}
        _contentContainerStyle={{paddingBottom: 20}}
      />


      </VStack>

    </VStack>
  )
}