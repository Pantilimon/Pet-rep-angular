import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'my-object-list',
  templateUrl: './my-object-list.component.html',
  styleUrl: './my-object-list.component.scss'
})
export class MyObjectListComponent {
  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) {}

  public MyObjectList = MyObjectList

  public redirectTo(id: number): void {
    this.router.navigate([`${id}`], { relativeTo: this.route})
  }
}

export const MyObjectList: MyObjectI[] = [
  {
    title: "JS",
    body: "It is a programming language",
    id: 1,
  },
  {
    title: "Fortran",
    body: "It is a programming language",
    id: 2,
  },
  {
    title: "Python",
    body: "It is a programming language",
    id: 3,
  },
  {
    title: "C++",
    body: "It is a programming language",
    id: 4,
  },
  {
    title: "Java",
    body: "It is a programming language",
    id: 5,
  },
]


export interface MyObjectI{
  title: string,
  body: string,
  id: number,
}
