export default function orderByProps(obj, order) {
  const result = [];

  order.forEach((el) => {
    if (el in obj) {
      result.push({ key: el, value: obj[el] });
    }
  });

  Object.keys(obj).sort().forEach((el) => {
    if (!order.includes(el)) {
      result.push({ key: el, value: obj[el] });
    }
  });

  return result;
}
