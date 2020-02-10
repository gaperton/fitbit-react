import document from 'document'

export const GRotate = id => {
    const el = document.getElementById( id );
    
    return angle => {
        el.groupTransform.rotate.angle = angle;
    }
}

export const Number = ( id, precision ) => {
    const int = document.getElementById( id + '-int' ),
          fr = document.getElementById( id + '-fr' ),
          factor = 10 ** precision;
    
    return num => {
        int.text = num | 0;
        fr.text = '.' + Math.round( ( num % 1 ) * factor );
    }
}