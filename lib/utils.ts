// import { clsx, type ClassValue } from "clsx"
// import { twMerge } from "tailwind-merge"
//
// export function cn(...inputs: ClassValue[]) {
//   return twMerge(clsx(inputs))
// }

// utils/getChannels.ts
import axios from 'axios';
//
export const getSuplaChannelsStates = async () => {
  try {
    const response = await axios.get('https://svr129.supla.org/api/v2.3.37/channels/states', {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_TOKEN_S}`,
        Accept: 'application/json',
      },
    });

    return response.data; // tablica kanałów ze statusami
  } catch (error) {
    console.error('Błąd podczas pobierania kanałów z Supla:', error);
    return null;
  }
};
//
// export const getSuplaChannels = async () => {
//   try {
//     const response = await axios.get('https://svr129.supla.org/api/v2.3.37/channels', {
//       headers: {
//         Authorization: `Bearer ${process.env.NEXT_PUBLIC_TOKEN_S}`,
//         Accept: 'application/json',
//       },
//     });
//
//     return response.data; // tablica kanałów ze statusami
//   } catch (error) {
//     console.error('Błąd podczas pobierania kanałów z Supla:', error);
//     return null;
//   }
// };