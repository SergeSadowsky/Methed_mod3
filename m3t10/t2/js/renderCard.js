import { el, svg } from 'redom';
// import {mask} from './masks';

export const renderCreditCard = ({
    number = '0123 4567 8910 1112',
    name = 'Иван Иванов',
    date = '01/23',
    security = '985',
} = {}) => {
    const cNumber = svg('text.st2.st3.st4', {id: 'svgnumber', transform: 'matrix(1 0 0 1 60.106 295.0121)' }, number);
    const cName = svg('text.st2.st3.st6', {id: 'svgname', transform: 'matrix(1 0 0 1 54.1064 428.1723)' }, name);
    const cDate = svg('text.st2.st3.st9', {id: 'svgexpire', transform: 'matrix(1 0 0 1 574.4219 433.8095)' }, date);
    const cSecurity = svg('text.st6.st7', {id: 'svgsecurity', transform: 'matrix(1 0 0 1 621.999 227.2734)' }, security);
    const cNameBack = svg('text.st12.st13', {id: "svgnameback", transform: "matrix(1 0 0 1 59.5073 228.6099)" }, name)

    const frontSvg = svg('svg', {
        'version': '1.1',
        'id': 'cardfront',
        'xmlns': 'http://www.w3.org/2000/svg',
        'xmlns:xlink': 'http://www.w3.org/1999/xlink',
        'x': '0px',
        'y': '0px',
        'viewBox': '0 0 750 471',
        'style': 'enable-background:new 0 0 750 471;',
        'xml:space': 'preserve'
    }, [
        svg('g', { id: 'Front' }, [
            svg('g', { id: 'CardBackground' }, [
                svg('g', { id: 'Page-1_1_' }, [
                    svg('g', { id: 'amex_1_' }, [
                        svg('path.lightcolor.grey', {
                            id: 'Rectangle-1_1_',
                            d: 'M40,0h670c22.1,0,40,17.9,40,40v391c0,22.1-17.9,40-40,40H40c-22.1,0-40-17.9-40-40V40C0,17.9,17.9,0,40,0z'
                        })
                    ])
                ]),
                svg('path.darkcolor.greydark', { d: "M750,431V193.2c-217.6-57.5-556.4-13.5-750,24.9V431c0,22.1,17.9,40,40,40h670C732.1,471,750,453.1,750,431z" })
            ]),
            cNumber,
            cName,
            svg('text.st7.st5.st8', { transform: 'matrix(1 0 0 1 54.1074 389.8793)' }, 'cardholder name'),
            svg('text.st7.st5.st8', { transform: 'matrix(1 0 0 1 479.7754 388.8793)' }, 'expiration'),
            svg('text.st7.st5.st8', { transform: 'matrix(1 0 0 1 65.1054 241.5)' }, 'card number'),
            svg('g', [
                cDate,
                svg('text.st2.st10.st11', { transform: 'matrix(1 0 0 1 479.3848 417.0097)' }, 'VALID'),
                svg('text.st2.st10.st11', { transform: 'matrix(1 0 0 1 479.3848 435.6762)' }, 'THRU'),
                svg('polygon.st2', { points: '554.5,421 540.4,414.2 540.4,427.9' })
            ]),
            svg('g', { id: "cchip" }, [
                svg('g', [svg('path.st2', { d: 'M168.1,143.6H82.9c-10.2,0-18.5-8.3-18.5-18.5V74.9c0-10.2,8.3-18.5,18.5-18.5h85.3c10.2,0,18.5,8.3,18.5,18.5v50.2C186.6,135.3,178.3,143.6,168.1,143.6z' })]),
                svg('g', [
                    svg('g', [svg('rect.st12', { x: '82', y: '70', width: '1.5', height: '60' })]),
                    svg('g', [svg('rect.st12', { x: '167.4', y: '70', width: '1.5', height: '60' })]),
                    svg('g', [svg('path.st12', {
                        d: `M125.5,130.8c-10.2,0-18.5-8.3-18.5-18.5c0-4.6,1.7-8.9,4.7-12.3c-3-3.4-4.7-7.7-4.7-12.3c0-10.2,
                        8.3-18.5,18.5-18.5s18.5,8.3,18.5,18.5c0,4.6-1.7,8.9-4.7,12.3c3,3.4,4.7,7.7,4.7,12.3C143.9,
                        122.5,135.7,130.8,125.5,130.8z M125.5,70.8c-9.3,0-16.9,7.6-16.9,16.9c0,4.4,1.7,8.6,4.8,11.8l0.5,0.5l-0.5,
                        0.5c-3.1,3.2-4.8,7.4-4.8,11.8c0,9.3,7.6,16.9,16.9,16.9s16.9-7.6,16.9-16.9c0-4.4-1.7-8.6-4.8-11.8l-0.5-0.5l0.5-0.5c3.1-3.2,
                        4.8-7.4,4.8-11.8C142.4,78.4,134.8,70.8,125.5,70.8z`})]),
                ]),
                svg('g', [svg('rect.st12', { x: '82.8', y: '82.1', width: '25.8', height: '1.5' })]),
                svg('g', [svg('rect.st12', { x: '82.8', y: '117.9', width: '26.1', height: '1.5' })]),
                svg('g', [svg('rect.st12', { x: '142.4', y: '82.1', width: '25.8', height: '1.5' })]),
                svg('g', [svg('rect.st12', { x: '142', y: '117.9', width: '26.2', height: '1.5' })]),
            ])
        ]),
        svg('g', {id: 'Back'})
    ]);

    const backSvg = svg('svg', {
        'version': '1.1',
        'id': 'cardback',
        'xmlns': 'http://www.w3.org/2000/svg',
        'xmlns:xlink': 'http://www.w3.org/1999/xlink',
        'x': '0px',
        'y': '0px',
        'viewBox': '0 0 750 471',
        'style': 'enable-background:new 0 0 750 471;',
        'xml:space': 'preserve'
    }, [
        svg('g#Front',[svg('line.st10', {x1:'35.3', y1:'10.4', x2:'36.7', y2:'11'})]),
        svg('g#Back',[
            svg('g#Page-1_2_',[
                svg('g#amex_2_', [
                    svg('path#Rectangle-1_2_.darkcolor.greydark', {d:'M40,0h670c22.1,0,40,17.9,40,40v391c0,22.1-17.9,40-40,40H40c-22.1,0-40-17.9-40-40V40C0,17.9,17.9,0,40,0z'})
                ])
            ]),
            svg('rect.st2', {y:'61.6', width:'750', height:'78'}),
            svg('g', [
                svg('path.st3',{d:'M701.1,249.1H48.9c-3.3,0-6-2.7-6-6v-52.5c0-3.3,2.7-6,6-6h652.1c3.3,0,6,2.7,6,6v52.5C707.1,246.4,704.4,249.1,701.1,249.1z'}),
                svg('rect.st4', {x:'42.9', y:'198.6', width:'664.1', height:'10.5'}),
                svg('rect.st4', {x:'42.9', y:'224.5', width:'664.1', height:'10.5'}),
                svg('path.st5',{d:'M701.1,184.6H618h-8h-10v64.5h10h8h83.1c3.3,0,6-2.7,6-6v-52.5C707.1,187.3,704.4,184.6,701.1,184.6z'})
            ]),
            cSecurity,
            svg('g.st8', [ svg('text.st9.st6.st10', {transform:'matrix(1 0 0 1 518.083 280.0879)'}, 'security code')]),
            svg('rect.st11', {x:'58.1', y:'378.6', width:'375.5', height:'13.5'}),
            svg('rect.st11', {x:'58.1', y:'405.6', width:'421.7', height:'13.5'}),
            cNameBack
        ])
    ]);

    return cc = el('div.creditcard', [
        el('div.front',[
            el('div#ccsingle'),
            frontSvg
        ]),
        el('div.back', [
            backSvg
        ])
    ]);
}

