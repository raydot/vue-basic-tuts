//https://vuejs.org/v2/guide/instance.html

// New Vue instance

var vm = new Vue ({
    // options
})

// vm is short for ViewModel as Vue was influenced by MVVM

// A vue application consists of a root Vue instance, organized into a tree of nested, reusable components.

// DATA AND METHODS

/*  When a Vue instance is created it adds all the properties found in its data object to Vue's reactivity system.  When the values of those properties chance, the view will "react," updating to match the new values */

// Data object
var data = {a : 1}

// Add object to Vue instance
var vm = new Vue({
    data: data
})

// Getting the property on the instance
vm.a == data.a // true

// Setting the property affects original data
vm.a = 2
data.a // 2

// and vice-versa
data.a = 3
vm.a // 3

/*
    When this data changes, the view will re-render.  Properties in data are only reactive if they existed when the instance is created.  If we now add a new property
*/

vm.b = 'foo'

// Changes to vm.b will not trigger any updates.  If you need it later, set it up!
data: {
    newThis: '',
    newThat: 0,
    newOther: 0,
    newBool: false,
    newArray: [],
    newError: null
}

// (You don't need to add "new," that's just me doing that.)

// You can freeze an object with freeze, which means the reactivity system can't track changes.

var obj = {
    foo: 'bar'
}

Object.freeze(obj)

new Vue({
    el: '#app',
    data: obj
})

<div id="app">
    <p>{{ foo }}</p>
    <!-- This will not update foo! -->
    <button v-on:click="foo = 'baz'">Change it!</button>
</div>

/*  
    In addition to data properties, Vue instanmces expose a number of useful instance properties and methods.  These are prefixed with $ to distinguish.
*/

var data = {a: 1}
var vm = new Vue({
    el: '
    #example',
    data: data
})

vm.$data === data // true
vm.$el === document.getElementById('example') // true

// $watch is an instance method
vm.$watch('a', function (newValue, oldValue) {
    // This callback will be called when `vm.a` changes
})

// https://vuejs.org/v2/api/#Instance-Properties has the whole list

// # INSTANCE LIFECYCLE HOOKS

/*
    Each Vue instance goes through a series of initialzation stops when it's created.  These instances are lifecycle hooks.
*/

new Vue ({
    data: {
        a: 1
    },
    created: function() {
        // this points to the vm instance
        console.log('a is: ' + this.a)
    }
})
// a is: 1

//Other hooks: mounted, updated, destroyed.  All lifecycle hooks are called with their this context pointing to the Vue instance invoking it.

// DON'T USE ARROW FUNCTIONS ON A PROPERTY OR CALLBACK since an arrow function doesn't have a 'this.'
