console.clear()

class TextLines {
  constructor(text) {
    this.lines = text.split('\n')
  }
  
  [Symbol.iterator]() {
    var idx = -1
    return {
      next: () => {
        idx++
        return idx < this.lines.length ?
        {value: this.lines[idx], done: false } 
        : {done:true}
      }
    }
  }
}


var lines = new TextLines("getText()\na")

for( var line of lines ) {
  console.log(line.length)
}

// OUTPUT
// 148
// 121
// 106
// 0
// 271
// ...

function getText () {
  return `Integer fringilla, lorem eget ultricies tempor, justo purus suscipit nulla, in pulvinar lorem arcu dapibus leo. Nam finibus ut sem vel pellentesque.
Integer sit amet venenatis justo, vitae posuere ipsum. Suspendisse non ante eros. Mauris ut urna at risus varius laoreet.
Nam ultricies ante quis lectus imperdiet, bibendum condimentum mi aliquam. Sed bibendum a velit at tempus.

Suspendisse gravida mi ut orci varius sollicitudin. Aenean feugiat nisi eget leo aliquam pretium. Maecenas iaculis, est ut euismod luctus, eros diam imperdiet sapien, vel consectetur nulla lectus et nibh. Phasellus eget augue hendrerit, vehicula nulla eu, imperdiet arcu.
Sed vehicula, nisi et dictum aliquam, ante ante fringilla sem, eget luctus diam mauris sit amet purus. Praesent sollicitudin, sapien eu auctor eleifend, turpis metus mattis quam, eget pulvinar neque enim rutrum erat.
Nam feugiat dignissim augue.
Cras eu velit sit amet nulla convallis pretium eu at odio. Maecenas et lacinia elit.
Interdum et malesuada fames ac ante ipsum primis in faucibus. Mauris volutpat nec sem auctor feugiat.
Nullam ultrices vehicula leo fringilla tristique.
Ut a tellus non lectus ultrices lacinia ut vitae quam.

Sed ullamcorper ligula eget lacus rutrum suscipit.
Nunc quis sodales massa, eget suscipit magna. Curabitur id leo eget lorem mattis congue vel eu dolor. Nulla commodo, odio ut aliquam tempor, ante dui iaculis nisi, sit amet congue ligula massa porta massa. Pellentesque auctor lacinia quam, non fringilla neque ornare nec.
Morbi scelerisque, nisl sed euismod malesuada, ex diam commodo diam, non volutpat arcu arcu quis urna. Donec faucibus erat auctor justo dapibus feugiat.

Nulla facilisi. Sed gravida ligula nisi, sed porta nibh vulputate nec. Aenean feugiat felis a sapien gravida mattis. Quisque sed ante tempor, pretium arcu eget, consectetur eros. Quisque in venenatis metus. Vestibulum quam massa, blandit quis egestas ut, ullamcorper ac sem. Nullam eget ultricies purus, sit amet eleifend metus.
Praesent nec mauris semper, accumsan lacus id, sollicitudin lacus. Nullam orci augue, accumsan sed mi sed, iaculis maximus quam. Phasellus a vestibulum est.
Aliquam erat volutpat.

Pellentesque aliquet, purus eu tincidunt maximus, mauris sapien posuere tortor, eu vulputate magna lorem a felis. Maecenas scelerisque nunc felis. Mauris sodales metus vestibulum, vestibulum diam vel, accumsan tellus. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
Sed velit mi, consectetur a tellus feugiat, iaculis pharetra sem. Nulla facilisi. Sed placerat ligula nec lobortis dictum. Aenean tincidunt nulla in maximus mattis. Aliquam finibus sem et nulla porttitor pellentesque.
Donec varius purus ac eros placerat, sed sagittis elit facilisis.`
}
