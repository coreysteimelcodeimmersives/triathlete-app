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
  const filteredSortedWoLib = useSelector((state) => state.filteredSortedWoLib);
  // const workoutLibrary = useSelector((state) => state.workoutLibrary);
  const workoutLibFilter = useSelector((state) => state.workoutLibFilter);
  // const [filteredWoLibArr, setFilteredWoLibArr] = useState(workoutLibrary);

  // const filterBySportType = () => {
  //   if (!workoutLibFilter.sportType) {
  //     setFilteredWoLibArr(
  //       workoutLibrary.filter((workout) => {
  //         return !workout.hasOwnProperty('sportType');
  //       })
  //     );
  //   } else {
  //     // First Filter By Sport Type
  //     setFilteredWoLibArr(
  //       workoutLibrary.filter((workout) => {
  //         return workout.sportType === workoutLibFilter.sportType;
  //       })
  //     );
  //   }
  // };

  // // Second Filter By Energy
  // const filterByEnergySystem = (copyFilterWoLibArr) => {
  //   // const copyFilterWoLibArr = filteredWoLibArr;
  //   // setFilteredWoLibArr(
  //   copyFilterWoLibArr.filter((workout) => {
  //     // if (
  //     //   workoutLibFilter.energySystem[ENERGY_SYSTEMS][workout.energySystem]
  //     // ) {
  //     return workout;
  //     // }
  //   });
  //   // );
  // };
  // //Third Sort
  // const sortByTitleFilteredWoLibArr = (copyFilterWoLibArr) => {
  //   if (workoutLibFilter.criteria === 'title') {
  //     // const copyFilterWoLibArr = filteredWoLibArr;
  //     if (workoutLibFilter.order === 'asc') {
  //       // setFilteredWoLibArr(
  //       copyFilterWoLibArr.sort((a, b) => {
  //         let fa = a.title.toLowerCase(),
  //           fb = b.title.toLowerCase();
  //         if (fa < fb) {
  //           return -1;
  //         }
  //         if (fa > fb) {
  //           return 1;
  //         }
  //         return 0;
  //       });
  //       // );
  //       return;
  //     }
  //     if (workoutLibFilter.order === 'desc') {
  //       // setFilteredWoLibArr(
  //       copyFilterWoLibArr.sort((a, b) => {
  //         let fa = a.title.toLowerCase(),
  //           fb = b.title.toLowerCase();
  //         if (fa < fb) {
  //           return 1;
  //         }
  //         if (fa > fb) {
  //           return -1;
  //         }
  //         return 0;
  //       });
  //       // );
  //       return;
  //     }
  //     return;
  //   }
  //   return;
  // };

  useEffect(() => {
    if (!user) {
      navigate('/sign-in');
    }
    window.scrollTo(0, 0);
    dispatch(woLibFilterPage(workoutLibFilter.sportType));
    // filterBySportType();
    // const filteredWoLibEnergySysArr = filterByEnergySystem(
    //   filteredWoLibSportTypeArr
    // );
    // const sortedWoLibArr = sortByTitleFilteredWoLibArr(
    //   filteredWoLibEnergySysArr
    // );
  }, []);

  return (
    <Layout>
      {filteredSortedWoLib.map((workout) => {
        return (
          <WorkoutCard key={workout.id} workoutId={workout.id}></WorkoutCard>
        );
      })}
      <Box marginBottom={'10vh'}></Box>
    </Layout>
  );
};

export default WorkoutLibraryFilter;
