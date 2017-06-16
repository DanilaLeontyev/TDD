/**
 * Created by Donsh on 6/14/2017.
 */
import assert from 'assert';
import {counterSiblings} from '../src/index';


//тут пишем тесты
describe('counterSiblings', function () {
    it('should return 1', function () {
        assert.equal(counterSiblings(1), 1)
    });
});
