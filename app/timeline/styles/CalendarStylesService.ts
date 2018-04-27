import { Injectable } from '@angular/core';
import { CalendarEvent, InlineEventCellStyle } from 'nativescript-ui-calendar' 
import { Color } from "color";
import { CalendarMonthViewStyle, DayCellStyle, CellStyle, CalendarWeekViewStyle, CalendarYearViewStyle, MonthCellStyle, CalendarMonthNamesViewStyle, CalendarDayViewStyle, DayEventsViewStyle, AllDayEventsViewStyle } from "nativescript-ui-calendar";

// >> calendar-styling-service
@Injectable()
export class UserStylesService {
  
    
    getWeekViewStyle(): CalendarWeekViewStyle {
        var weekViewStyle = new CalendarWeekViewStyle();
        weekViewStyle.backgroundColor = "transparent";
        weekViewStyle.showTitle = false;
        weekViewStyle.showWeekNumbers = false;
        weekViewStyle.showDayNames = true;
        weekViewStyle.selectionShape = "Round";
        weekViewStyle.selectionShapeColor = "#ba77ff";
        weekViewStyle.selectionShapeSize=15;
        
        


        var todayCellStyle = new DayCellStyle();
        //todayCellStyle.cellBackgroundColor = "#ba77ff";
        // todayCellStyle.cellBorderWidth = 1;
        todayCellStyle.cellBorderColor = "transparent";
        // todayCellStyle.cellTextColor = "#5898d8";
        todayCellStyle.cellTextFontName = "Times New Roman";
        todayCellStyle.cellTextFontStyle = "Bold";
        todayCellStyle.cellTextSize = 15;
        
        
        
        weekViewStyle.todayCellStyle = todayCellStyle;
        
        var dayCellStyle = new DayCellStyle();
        dayCellStyle.showEventsText = false;
        dayCellStyle.eventTextColor = "White";
        dayCellStyle.eventFontName = "Times New Roman";
        dayCellStyle.eventFontStyle = "BoldItalic";
        dayCellStyle.eventTextSize = 8;
        dayCellStyle.cellAlignment = "Left";
        // dayCellStyle.cellAlignment = "VerticalCenter";
        dayCellStyle.cellPaddingHorizontal = 18;
        dayCellStyle.cellPaddingVertical = 12;
        dayCellStyle.cellBackgroundColor = "transparent";
        // dayCellStyle.cellBorderWidth = 1;
        dayCellStyle.cellBorderColor = "transparent";
        dayCellStyle.cellTextColor = "#ffffff";
        dayCellStyle.cellTextFontName = "Times New Roman";
        dayCellStyle.cellTextFontStyle = "Bold";
        dayCellStyle.cellTextSize = 15;
        
        weekViewStyle.dayCellStyle = dayCellStyle;
        
        var weekendCellStyle = new DayCellStyle();
        weekendCellStyle.cellAlignment = "HorizontalCenter";
        weekendCellStyle.eventTextColor = "BlueViolet";
        weekendCellStyle.eventFontName = "Times New Roman";
        weekendCellStyle.eventFontStyle = "BoldItalic";
        weekendCellStyle.eventTextSize = 8;
        // weekendCellStyle.cellAlignment = "VerticalCenter";
        weekendCellStyle.cellPaddingHorizontal = 18;
        weekendCellStyle.cellPaddingVertical = 12;
        weekendCellStyle.cellBackgroundColor = "transparent";
        // weekendCellStyle.cellBorderWidth = 1;
        weekendCellStyle.cellBorderColor = "transparent";
        weekendCellStyle.cellTextColor = "#ffffff";
        weekendCellStyle.cellTextFontName = "Times New Roman";
        weekendCellStyle.cellTextFontStyle = "Bold";
        weekendCellStyle.cellTextSize = 15;
        weekViewStyle.weekendCellStyle = weekendCellStyle;
        
        
        var dayNameCellStyle = new CellStyle();
        
        dayNameCellStyle.cellBackgroundColor = "rgba(0,0,0,0)";
        // dayNameCellStyle.cellBorderWidth = 10;
        // dayNameCellStyle.cellAlignment = "Center";
        dayNameCellStyle.cellBorderColor = "transparent";
        dayNameCellStyle.cellTextColor = "#ffffff";
        dayNameCellStyle.cellTextFontName = "Times New Roman";
        dayNameCellStyle.cellTextFontStyle = "Bold";
        dayNameCellStyle.cellTextSize = 10;
        dayNameCellStyle.cellAlignment = "Center";
        weekViewStyle.dayNameCellStyle = dayNameCellStyle;
        
        var titleCellStyle = new DayCellStyle();
        
        titleCellStyle.cellBackgroundColor = "transparent";
        titleCellStyle.cellBorderColor = "transparent";
        titleCellStyle.cellTextColor = "#ffffff";
        titleCellStyle.cellTextFontName = "Times New Roman";
        titleCellStyle.cellTextFontStyle = "Bold";
        titleCellStyle.cellTextSize = 18;
        weekViewStyle.titleCellStyle = titleCellStyle;
        
        

        return weekViewStyle;
    }


    // << calendar-styling-service
}
