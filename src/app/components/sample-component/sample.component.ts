import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { get } from 'lodash';

@Component({
  selector: 'sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.scss']
})
export class SampleComponent {
  @Input() sampleData: any;

  public currentPageStart: number = null;
  public currentPageEnd: number = null;

  ngOnChanges(changes?: SimpleChanges): void {
    // only run update logic if the property in question has been updated
    const sampleData = get(changes, 'sampleData.currentValue');
    if (sampleData) {
      this.onSampleUpdate();
    }
  }

  onSampleUpdate(): void {
    if (!this.sampleData) {
      return;
    }

    this.currentPageStart = (this.sampleData.page - 1) * this.sampleData.pageSize + 1;
    const pageEnd = this.sampleData.page * this.sampleData.pageSize;
    this.currentPageEnd = pageEnd < this.sampleData.size ? pageEnd : this.sampleData.size;
  }
}
