import './hello.css';
import {hello} from './hello'
export default angular.module('hello', [])
    .component('hello', hello);
