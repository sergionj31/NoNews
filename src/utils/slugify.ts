// src/utils/slugify.ts

export function slugify(text: string): string {
    return text
        .toString()           // Asegúrate de que sea una cadena
        .normalize('NFD')     // Normaliza los caracteres especiales
        .replace(/[\u0300-\u036f]/g, '') // Elimina los acentos
        .toLowerCase()        // Convierte todo a minúsculas
        .replace(/[^a-z0-9 -]/g, '') // Elimina caracteres no válidos
        .replace(/\s+/g, '-')  // Reemplaza los espacios por guiones
        .replace(/-+/g, '-');  // Elimina guiones consecutivos
}
  