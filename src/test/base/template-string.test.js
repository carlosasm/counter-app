import { getSaludo  } from '../../base/02-template-string'

describe('Test on 02-template-string file', () => {
    test('getSaludo Must return Hola + MyName ', () => {
        const name = 'Carlos';
        const nameResult = getSaludo(name);

        expect( nameResult ).toBe( 'Hola ' + name );
    });

    test('getSaludo Must return Hola Carlos by default if there is no name value ', () => {
        const nameResult = getSaludo();

        expect( nameResult ).toBe( 'Hola Carlos' );
    });
    
});
