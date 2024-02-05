import { Component, Input } from '@angular/core';

@Component({
  selector: 'movies-votes',
  templateUrl: './votes.component.html',
  styleUrls: ['./votes.component.sass'],
})
export class VotesComponent {
  @Input() voteAverage: number = 0;
  @Input() voteFontSize: string = '1.4rem';
  @Input() voteText: string = '';
  @Input() voteWidth: string = '80px';
}
