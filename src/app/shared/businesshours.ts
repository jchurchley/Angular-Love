import {Component, OnInit, Input} from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith, filter} from 'rxjs/operators';

/**
 * @title Filter autocomplete
 */
@Component({
  selector: 'business-hours',
  templateUrl: 'businesshours.html',
})
export class BusinessHours implements OnInit{

    formControl :FormControl  = new  FormControl();
   
    
    @Input() label: string;

    options: string[] = ["Closed"];
    filteredOptions: Observable<string[]>;

  ngOnInit() {
    for (var index = 0; index < 96; index++) {
        var dateTime = new Date(0,0,0);
        dateTime.setMinutes(index*15);
        this.options.push(("0" + dateTime.getHours().toString()).slice(-2)  + ":" + ("0" + dateTime.getMinutes().toString()).slice(-2))        
    }

    this.filteredOptions = this.formControl.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();    

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }
}