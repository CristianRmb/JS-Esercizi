   if (notes[i].todos[j].done === false) {
          noteNonCompletate.push(JSON.parse(JSON.stringify(notes[i])));
          break;
        }