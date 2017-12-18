import { TestBed } from '@angular/core/testing';
import { FilterPipe } from './filter.pipe';

describe('Filter Pipe Tests', () => {
    let pipe: FilterPipe;

    beforeEach(() => {
        pipe = new FilterPipe();
    });

    let input: any = [
        { id: 1, name: 'Dashboard' },
        { id: 2, name: 'Settings' },
        { id: 3, name: 'Help' }
    ];

    let output: any = [
        { id: 2, name: 'Settings' }
    ];

    it('Should filter an object by a search term', () => {
        let result = pipe.transform(input, 'sett');

        expect(result).toEqual(output);
    });
});