package com.crm.cp.utils;

public class PageUtil {

	private int currentPageNum; // 현재 페이지 번호
	private int startRow; // 시작 행 번호
	private int endRow; // 끝 행 번호
	private int totalPageCount; // 전체페이지갯수
	private int startPageNum;
	private int endPageNum;
	private int pageBlockCount;
	private int rowBlockCount;
	private int totalRowCount;
	
	 public PageUtil() {	}

	 public PageUtil(int currentPageNum, int totalRowCount, int pageBlockCount, int rowBlockCount) {
		 startRow = (currentPageNum-1)*rowBlockCount+1;
		 endRow = startRow + rowBlockCount -1;
		 
		 totalPageCount = totalRowCount / rowBlockCount;
		 if(totalRowCount % rowBlockCount != 0){
			 totalPageCount++;
		 }
		 startPageNum = (int)((currentPageNum-1)/rowBlockCount) * rowBlockCount + 1;
		 endPageNum = startPageNum + (rowBlockCount -1);
		 if(endPageNum>totalPageCount){
			 endPageNum = totalPageCount;
		 }
	 }

	 
	public int getCurrentPageNum() {
		return currentPageNum;
	}

	public void setCurrentPageNum(int currentPageNum) {
		this.currentPageNum = currentPageNum;
	}

	public int getStartRow() {
		return startRow;
	}

	public void setStartRow(int startRow) {
		this.startRow = startRow;
	}

	public int getEndRow() {
		return endRow;
	}

	public void setEndRow(int endRow) {
		this.endRow = endRow;
	}

	public int getTotalPageCount() {
		return totalPageCount;
	}

	public void setTotalPageCount(int totalPageCount) {
		this.totalPageCount = totalPageCount;
	}

	public int getStartPageNum() {
		return startPageNum;
	}

	public void setStartPageNum(int startPageNum) {
		this.startPageNum = startPageNum;
	}

	public int getEndPageNum() {
		return endPageNum;
	}

	public void setEndPageNum(int endPageNum) {
		this.endPageNum = endPageNum;
	}

	public int getPageBlockCount() {
		return pageBlockCount;
	}

	public void setPageBlockCount(int pageBlockCount) {
		this.pageBlockCount = pageBlockCount;
	}

	public int getRowBlockCount() {
		return rowBlockCount;
	}

	public void setRowBlockCount(int rowBlockCount) {
		this.rowBlockCount = rowBlockCount;
	}

	public int getTotalRowCount() {
		return totalRowCount;
	}

	public void setTotalRowCount(int totalRowCount) {
		this.totalRowCount = totalRowCount;
	}
	 
	 
}
