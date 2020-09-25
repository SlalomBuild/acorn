import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';

import { State } from 'app/reducers/store';
import { ApplicationActions } from 'app/actions';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {
  @Input() headerText: string;

  constructor(
    public store: Store<State>
  ) { }

  closeAllModals() {
    this.store.dispatch(new ApplicationActions.CloseAllModals());
  }
}
