export function sortAZ(a,b) {
        if (a.name.toLowerCase() > b.name.toLowerCase()) return 1;
        if (a.name.toLowerCase() < b.name.toLowerCase()) return -1;
        return 0;
}

export function sortZA(a,b){
        if (a.name.toLowerCase() < b.name.toLowerCase()) return 1;
        if (a.name.toLowerCase() > b.name.toLowerCase()) return -1;
        return 0;
}

export function sortRatingAsc(a,b){
        if (a.rating < b.rating) return 1;
        if (a.rating > b.rating) return -1;
        return 0; 
}

export function sortRatingDes(a,b){
        if (a.rating > b.rating) return 1;
        if (a.rating < b.rating) return -1;
        return 0;
}


export const platforms = [
                'PlayStation',
                'Xbox',
                'Nintendo',
                'Sega',
                'Atari',
                'Android',
                'iOS',
                'Pc'] 