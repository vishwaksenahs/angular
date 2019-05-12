import { Component , OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {MatTableModule} from '@angular/material/table';
//import {AddDialogComponent} from './dialogs/add/add.dialog.component';
//import {EditDialogComponent} from './dialogs/edit/edit.dialog/edit.dialog.component';
//import {DeleteDialogComponent} from './dialogs/delete/delete.dialog/delete.dialog.component';

export interface version {
  version: string;
  status: string;
  progress: number;
  start_date: Date;
  end_date: Date;
  description:string;
  color:string;
}

const COLORS: string[] = [ 'blue','yellow','green',];
const STATUS: string[] = ['INPROGRESS','UNRELEASED', 'RELEASED'];
const NAMES: string[] = ['v1', 'v2', 'v3', 'v4', 'v5', 'v6',
  'v7', 'v8', 'v9', 'v10', 'v11', 'v12'];
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  displayedColumns: string[] = ['version', 'status', 'progress', 'start_date','end_date','description','actions'];
    dataSource: MatTableDataSource<version>;

    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;

    constructor() {
      const data = Array.from({length: 5}, (_, k) => createSomeData(k++));

      this.dataSource = new MatTableDataSource(data);
    }

    ngOnInit() {
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    }


    applyFilter(filterValue: string) {
      this.dataSource.filter = filterValue.trim().toLowerCase();

      if (this.dataSource.paginator) {
        this.dataSource.paginator.firstPage();
      }
    }
  }
  var sd:Date[];
  sd=[new Date('2000-11-11'),new Date('2001-11-11'),new Date('2002-11-11'),new Date('2013-11-11')
,new Date('2019-11-11')];

var ed:Date[];
ed=[new Date('2007-11-11'),new Date('2008-11-11'),new Date('2022-11-11'),new Date('2023-11-11')
,new Date('2019-11-12')];


  /** Initial data. */
  function createSomeData(id: number): version {
var td=new Date();
var diff = ed[id]- sd[id];
var diffDays = Math.ceil(diff / (1000 * 3600 * 24));
var stat;
var prog;
var colour;
if(ed[id]-sd[id]){
  if(ed[id]>td && td>sd[id]){
    var di=td-sd[id];
    var a=Math.ceil(di / (1000 * 3600 * 24));
     stat=STATUS[1];
     prog=(a/diffDays)*100;
     colour=COLORS[1];
  }
  else if(td>ed[id]){
    stat=STATUS[2];
    prog=100;
    colour=COLORS[2];
  }
  else {
    stat=STATUS[0];
    prog=0;
    colour=COLORS[0];
  }
}


    return {
      version: "Version "+id,
      status: stat,
      progress: prog,
      start_date: sd[id],
      end_date: ed[id],
      description:"Hello All",
      color:colour,
    };
}
