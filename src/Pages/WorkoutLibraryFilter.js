import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Layout from '../Components/Layout/Layout';
import WorkoutCard from '../Components/WorkoutCard/WorkoutCard';
import { Box } from '@mui/system';
import { woLibFilterPage } from '../Redux-State/PageSlice';
import { ENERGY_SYSTEMS } from '../Data/EnergySystems';

const WorkoutLibraryFilter = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  const workoutLibrary = useSelector((state) => state.workoutLibrary);
  const workoutLibFilter = useSelector((state) => state.workoutLibFilter);
  const [filteredWoLibArr, setFilteredWoLibArr] = useState(workoutLibrary);

  const applySportTypeFilterToWoLib = () => {
    if (!workoutLibFilter.sportType) {
      setFilteredWoLibArr(
        workoutLibrary.filter((workout) => {
          return !workout.hasOwnProperty('sportType');
        })
      );
    } else {
      // First Filter By Sport Type
      setFilteredWoLibArr(
        workoutLibrary.filter((workout) => {
          return workout.sportType === workoutLibFilter.sportType;
        })
      );
      // Second Filter By Energy

      // setFilteredWoLibArr(
      //   filteredWoLibArr.filter((workout) => {
      //     if (
      //       workoutLibFilter.energySystem.includes(
      //         ENERGY_SYSTEMS[workout.energySystem]
      //       )
      //     ) {
      //       return workout;
      //     }
      //   })
      // );
      // Third Sort
      // switch (workoutLibFilter.sort) {
      //   case 'titleAsc': {
      //     const titleAsc = filteredWoLibArr.sort();
      //     // return setFilteredWoLibArr(titleAsc);
      //   }
      //   case 'titleDesc': {
      //     const titleDesc = filteredWoLibArr.reverse();
      //     console.log(titleDesc);
      //     // return setFilteredWoLibArr(titleDesc);
      //   }
      //   default: {
      //     // const titleAsc = filteredWoLibArr.sort();
      //     // return setFilteredWoLibArr(titleAsc);
      //   }
      // }
    }

    //durationAsc: null,
    // durationDesc: null,
    // titleAsc: true,
    // titleDesc: null,
  };

  useEffect(() => {
    if (!user) {
      navigate('/sign-in');
    }
    window.scrollTo(0, 0);
    dispatch(woLibFilterPage(workoutLibFilter.sportType));
    applySportTypeFilterToWoLib();
  }, [workoutLibFilter]);

  console.log(filteredWoLibArr);
  return (
    <Layout>
      {workoutLibrary &&
        filteredWoLibArr.map((workout) => {
          return (
            <WorkoutCard key={workout.id} workoutId={workout.id}></WorkoutCard>
          );
        })}
      <Box marginBottom={'10vh'}></Box>
    </Layout>
  );
};

export default WorkoutLibraryFilter;
