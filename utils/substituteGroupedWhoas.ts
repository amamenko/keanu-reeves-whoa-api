import { groupingsArr } from "../arrays/groupingsArr";
import { Whoa } from "../interfaces/Whoa.interface";

export const substituteGroupedWhoas = (randomWhoa: Whoa[]) => {
  return randomWhoa.map((whoaObj) => {
    if (whoaObj.whoa_grouping) {
      const associatedGrouping = groupingsArr.find(
        (groupingObj) =>
          groupingObj.movie === whoaObj.movie &&
          groupingObj.year === whoaObj.year
      );
      if (associatedGrouping) {
        const foundGroupings = associatedGrouping.groupings;
        if (foundGroupings && foundGroupings.length > 0) {
          const currentGrouping =
            foundGroupings[whoaObj.whoa_grouping.movie_whoa_group_index];
          if (
            currentGrouping &&
            currentGrouping.video &&
            currentGrouping.audio
          ) {
            whoaObj.video = currentGrouping.video;
            whoaObj.audio = currentGrouping.audio;
          }
          return whoaObj;
        }
        return whoaObj;
      } else {
        return whoaObj;
      }
    } else {
      return whoaObj;
    }
  });
};
