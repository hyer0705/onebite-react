import Chance from "Chance";
const change = new Chance();

/* chance를 이용해 무작위 이름을 생성해 반환 */
export function getRandomName() {
  return change.name();
}

/* chance를 이용해 무작위 이메일을 생성해 반환 */
export function getRandomEmail() {
  return change.email();
}

export function getRandomPerson() {
  return {
    name: change.name(),
    age: change.age({ type: "adult" }),
    gender: change.gender(),
    socialSecurityNumber: change.ssn(),
    birthdate: change.birthday({ string: true }),
    phone: change.phone({ country: "uk", mobile: true }),
  };
}
