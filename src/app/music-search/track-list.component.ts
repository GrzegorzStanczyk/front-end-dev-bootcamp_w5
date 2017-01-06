import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'track-list',
  template: `
  <video [src]="currentSrc" controls style="width:100%"></video>
  <table class="table table-striped">
      <thead>
        <tr>
          <th> # </th>
          <th> Nazwa </th>
          <th> Wykonawca </th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let track of tracks" (click)="play(track)">
            <td> {{track.track_number}} </td>
            <td> {{track.name}} </td>
            <td> {{track.artists[0].name}} </td>
          </tr>
      </tbody>
  </table>
  `,
  styles: []
})
export class TrackListComponent implements OnInit {

  currentSrc = "";

  play(track) {
    this.currentSrc = track.preview_url;
  }

  @Input()
  tracks

  constructor() { }

  ngOnInit() {
  }

}
