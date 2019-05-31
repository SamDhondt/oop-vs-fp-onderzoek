export function startMetronome(tempo, sound) {
  return setInterval(() => console.log(sound), (60 / tempo) * 1000);
}
