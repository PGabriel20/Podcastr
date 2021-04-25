export function convertDurationToTimeString(duration: number){
  const hours = Math.floor(duration / 3600)

  //Pega resto da divisão hours e divide por 60
  const minutes = Math.floor((duration % 3600) / 60);
  const seconds = duration % 60;

  //Criando string que contém horas, minutos e segundos (formatando)
  const timeString = [hours, minutes, seconds]
  .map(unit => String(unit).padStart(2, '0'))
  .join(':')

  return timeString;
}