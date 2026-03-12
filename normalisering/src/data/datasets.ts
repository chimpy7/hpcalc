export interface NormIntervall {
  min: number
  max: number
  normPoäng: number
}

export interface NormTabell {
  medelvärde: number
  standardavvikelse: number
  intervall: NormIntervall[]
}

export interface Dataset {
  namn: string
  verbal: NormTabell
  kvantitativ: NormTabell
}

// Slår upp normpoäng för ett givet råpoäng i en normtabell.
// Returnerar null om råpoängen inte finns i något intervall.
export function slåUppPoäng(råpoäng: number, tabell: NormTabell): number | null {
  const träff = tabell.intervall.find(
    (i) => råpoäng >= i.min && råpoäng <= i.max
  )
  return träff?.normPoäng ?? null
}

// Lägg till fler dataset här – de dyker upp automatiskt i dropdown-listan.
export const datasets: Dataset[] = [
  {
    namn: 'Dataset 2025 höst',
    verbal: {
      medelvärde: 0.84,
      standardavvikelse: 0.43,
      intervall: [
        { min: 0,  max: 20, normPoäng: 0.0 },
        { min: 21, max: 22, normPoäng: 0.1 },
        { min: 23, max: 25, normPoäng: 0.2 },
        { min: 26, max: 27, normPoäng: 0.3 },
        { min: 28, max: 31, normPoäng: 0.4 },
        { min: 32, max: 34, normPoäng: 0.5 },
        { min: 35, max: 37, normPoäng: 0.6 },
        { min: 38, max: 41, normPoäng: 0.7 },
        { min: 42, max: 45, normPoäng: 0.8 },
        { min: 46, max: 49, normPoäng: 0.9 },
        { min: 50, max: 53, normPoäng: 1.0 },
        { min: 54, max: 57, normPoäng: 1.1 },
        { min: 58, max: 60, normPoäng: 1.2 },
        { min: 61, max: 62, normPoäng: 1.3 },
        { min: 63, max: 64, normPoäng: 1.4 },
        { min: 65, max: 67, normPoäng: 1.5 },
        { min: 68, max: 69, normPoäng: 1.6 },
        { min: 70, max: 71, normPoäng: 1.7 },
        { min: 72, max: 73, normPoäng: 1.8 },
        { min: 74, max: 75, normPoäng: 1.9 },
        { min: 76, max: 80, normPoäng: 2.0 },
      ],
    },
    kvantitativ: {
      medelvärde: 0.97,
      standardavvikelse: 0.46,
      intervall: [
        { min: 0,  max: 16, normPoäng: 0.0 },
        { min: 17, max: 18, normPoäng: 0.1 },
        { min: 19, max: 20, normPoäng: 0.2 },
        { min: 21, max: 22, normPoäng: 0.3 },
        { min: 23, max: 24, normPoäng: 0.4 },
        { min: 25, max: 27, normPoäng: 0.5 },
        { min: 28, max: 31, normPoäng: 0.6 },
        { min: 32, max: 35, normPoäng: 0.7 },
        { min: 36, max: 39, normPoäng: 0.8 },
        { min: 40, max: 43, normPoäng: 0.9 },
        { min: 44, max: 47, normPoäng: 1.0 },
        { min: 48, max: 51, normPoäng: 1.1 },
        { min: 52, max: 55, normPoäng: 1.2 },
        { min: 56, max: 58, normPoäng: 1.3 },
        { min: 59, max: 62, normPoäng: 1.4 },
        { min: 63, max: 66, normPoäng: 1.5 },
        { min: 67, max: 69, normPoäng: 1.6 },
        { min: 70, max: 71, normPoäng: 1.7 },
        { min: 72, max: 73, normPoäng: 1.8 },
        { min: 74, max: 75, normPoäng: 1.9 },
        { min: 76, max: 80, normPoäng: 2.0 },
      ],
    },

    
  },

{

  namn: 'Dataset 2025 vår',
    verbal: {
      medelvärde: 0.81,
      standardavvikelse: 0.43,
      intervall: [
    { min: 0, max: 19, normPoäng: 0.0 },
    { min: 20, max: 21, normPoäng: 0.1 },
    { min: 22, max: 24, normPoäng: 0.2 },
    { min: 25, max: 27, normPoäng: 0.3 },
    { min: 28, max: 30, normPoäng: 0.4 },
    { min: 31, max: 34, normPoäng: 0.5 },
    { min: 35, max: 38, normPoäng: 0.6 },
    { min: 39, max: 42, normPoäng: 0.7 },
    { min: 43, max: 45, normPoäng: 0.8 },
    { min: 46, max: 49, normPoäng: 0.9 },
    { min: 50, max: 53, normPoäng: 1.0 },
    { min: 54, max: 57, normPoäng: 1.1 },
    { min: 58, max: 60, normPoäng: 1.2 },
    { min: 61, max: 63, normPoäng: 1.3 },
    { min: 64, max: 65, normPoäng: 1.4 },
    { min: 66, max: 68, normPoäng: 1.5 },
    { min: 69, max: 70, normPoäng: 1.6 },
    { min: 71, max: 72, normPoäng: 1.7 },
    { min: 73, max: 74, normPoäng: 1.8 },
    { min: 75, max: 76, normPoäng: 1.9 },
    { min: 77, max: 80, normPoäng: 2.0 }
      ],
    },
    kvantitativ: {
      medelvärde: 0.93,
      standardavvikelse: 0.46,
      intervall: [
    { min: 0, max: 17, normPoäng: 0.0 },
    { min: 18, max: 20, normPoäng: 0.1 },
    { min: 21, max: 22, normPoäng: 0.2 },
    { min: 23, max: 24, normPoäng: 0.3 },
    { min: 25, max: 27, normPoäng: 0.4 },
    { min: 28, max: 30, normPoäng: 0.5 },
    { min: 31, max: 34, normPoäng: 0.6 },
    { min: 35, max: 37, normPoäng: 0.7 },
    { min: 38, max: 40, normPoäng: 0.8 },
    { min: 41, max: 44, normPoäng: 0.9 },
    { min: 45, max: 47, normPoäng: 1.0 },
    { min: 48, max: 51, normPoäng: 1.1 },
    { min: 52, max: 55, normPoäng: 1.2 },
    { min: 56, max: 59, normPoäng: 1.3 },
    { min: 60, max: 62, normPoäng: 1.4 },
    { min: 63, max: 65, normPoäng: 1.5 },
    { min: 66, max: 68, normPoäng: 1.6 },
    { min: 69, max: 70, normPoäng: 1.7 },
    { min: 71, max: 72, normPoäng: 1.8 },
    { min: 73, max: 74, normPoäng: 1.9 },
    { min: 75, max: 80, normPoäng: 2.0 }
      ],
    },




},

{
  namn: 'Dataset 2024 höst',
  verbal: {
    medelvärde: 0.83,
    standardavvikelse: 0.42,
    intervall: [
      { min: 0,  max: 19, normPoäng: 0.0 },
      { min: 20, max: 21, normPoäng: 0.1 },
      { min: 22, max: 24, normPoäng: 0.2 },
      { min: 25, max: 27, normPoäng: 0.3 },
      { min: 28, max: 30, normPoäng: 0.4 },
      { min: 31, max: 33, normPoäng: 0.5 },
      { min: 34, max: 36, normPoäng: 0.6 },
      { min: 37, max: 40, normPoäng: 0.7 },
      { min: 41, max: 44, normPoäng: 0.8 },
      { min: 45, max: 48, normPoäng: 0.9 },
      { min: 49, max: 52, normPoäng: 1.0 },
      { min: 53, max: 55, normPoäng: 1.1 },
      { min: 56, max: 59, normPoäng: 1.2 },
      { min: 60, max: 61, normPoäng: 1.3 },
      { min: 62, max: 64, normPoäng: 1.4 },
      { min: 65, max: 67, normPoäng: 1.5 },
      { min: 68, max: 69, normPoäng: 1.6 },
      { min: 70, max: 71, normPoäng: 1.7 },
      { min: 72, max: 73, normPoäng: 1.8 },
      { min: 74, max: 75, normPoäng: 1.9 },
      { min: 76, max: 80, normPoäng: 2.0 },
    ],
  },
  kvantitativ: {
    medelvärde: 0.96,
    standardavvikelse: 0.44,
    intervall: [
      { min: 0,  max: 16, normPoäng: 0.0 },
      { min: 17, max: 18, normPoäng: 0.1 },
      { min: 19, max: 20, normPoäng: 0.2 },
      { min: 21, max: 22, normPoäng: 0.3 },
      { min: 23, max: 24, normPoäng: 0.4 },
      { min: 25, max: 27, normPoäng: 0.5 },
      { min: 28, max: 30, normPoäng: 0.6 },
      { min: 31, max: 34, normPoäng: 0.7 },
      { min: 35, max: 38, normPoäng: 0.8 },
      { min:  39, max: 42, normPoäng: 0.9 },
      { min: 43, max: 45, normPoäng: 1.0 },
      { min: 46, max: 49, normPoäng: 1.1 },
      { min: 50, max: 53, normPoäng: 1.2 },
      { min: 54, max: 56, normPoäng: 1.3 },
      { min: 57, max: 60, normPoäng: 1.4 },
      { min: 61, max: 63, normPoäng: 1.5 },
      { min: 64, max: 66, normPoäng: 1.6 },
      { min: 67, max: 69, normPoäng: 1.7 },
      { min: 70, max: 71, normPoäng: 1.8 },
      { min: 72, max: 73, normPoäng: 1.9 },
      { min: 74, max: 80, normPoäng: 2.0 },
    ],
  }      
},
{namn: 'Dataset 2024 vår',
  verbal: {
    medelvärde: 0.83,
    standardavvikelse: 0.43,
    intervall: [
      { min: 0,  max: 18, normPoäng: 0.0 },
      { min: 19, max: 20, normPoäng: 0.1 },
      { min: 21, max: 22, normPoäng: 0.2 },
      { min: 23, max: 25, normPoäng: 0.3 },
      { min: 26, max: 28, normPoäng: 0.4 },
      { min: 29, max: 32, normPoäng: 0.5 },
      { min: 33, max: 35, normPoäng: 0.6 },
      { min: 36, max: 38, normPoäng: 0.7 },
      { min: 39, max: 42, normPoäng: 0.8 },
      { min: 43, max: 45, normPoäng: 0.9 },
      { min: 46, max: 50, normPoäng: 1.0 },
      { min: 51, max: 53, normPoäng: 1.1 },
      { min: 54, max: 56, normPoäng: 1.2 },
      { min: 57, max: 59, normPoäng: 1.3 },
      { min: 60, max: 62, normPoäng: 1.4 },
      { min: 63, max: 65, normPoäng: 1.5 },
      { min: 66, max: 68, normPoäng: 1.6 },
      { min: 69, max: 70, normPoäng: 1.7 },
      { min: 71, max: 72, normPoäng: 1.8 },
      { min: 73, max: 75, normPoäng: 1.9 },
      { min: 76, max: 80, normPoäng: 2.0 },
    ],
  },
  kvantitativ: {
    medelvärde: 0.94,
    standardavvikelse: 0.45,
    intervall: [
      { min: 0,  max: 17, normPoäng: 0.0 },
      { min: 18, max: 19, normPoäng: 0.1 },
      { min: 20, max: 21, normPoäng: 0.2 },
      { min: 22, max: 23, normPoäng: 0.3 },
      { min: 24, max: 26, normPoäng: 0.4 },
      { min: 27, max: 28, normPoäng: 0.5 },
      { min: 29, max: 32, normPoäng: 0.6 },
      { min: 33, max: 35, normPoäng: 0.7 },
      { min: 36, max: 39, normPoäng: 0.8 },
      { min:  40, max: 43, normPoäng: 0.9 },
      { min: 44, max: 46, normPoäng: 1.0 },
      { min: 47, max: 50, normPoäng: 1.1 },
      { min: 51, max: 54, normPoäng: 1.2 },
      { min: 55, max: 57, normPoäng: 1.3 },
      { min: 58, max: 60, normPoäng: 1.4 },
      { min: 61, max: 64, normPoäng: 1.5 },
      { min: 65, max: 67, normPoäng: 1.6 },
      { min: 68, max: 69, normPoäng: 1.7 },
      { min: 70, max: 71, normPoäng: 1.8 },
      { min: 72, max: 74, normPoäng: 1.9 },
      { min: 75, max: 80, normPoäng: 2.0 },
    ],
  }      
 
}
        

]
