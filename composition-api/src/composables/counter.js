import { reactive, toRefs } from 'vue';

export default function () {
  const data = reactive({
    counter: 0,
    increaseValue: 1,
  });

  const add = () => {
    const increaseValue = +data.increaseValue;
    data.counter += increaseValue > 0 ? increaseValue : 1;
  };

  return { ...toRefs(data), add };
}
