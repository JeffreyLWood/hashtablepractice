var majorityElement = function (nums) {
  let map = {};
  let maj = nums.length / 2;

  for (let i = 0; i < nums.length; i++) {
    if (map[nums[i]]) map[nums[i]] += 1;
    else {
      map[nums[i]] = 1;
    }
    if (map[nums[i]] >= maj) {
      return nums[i];
    }
  }
};
